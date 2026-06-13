'use server';

import { createClient } from '@/utils/supabase/server';
import { Resend } from 'resend';

// Initialize Resend
const resend = new Resend(process.env.RESEND_API_KEY);

export async function submitApplication(formData: FormData) {
  const supabase = createClient();
  
  const first_name = formData.get('first_name') as string;
  const last_name = formData.get('last_name') as string;
  const email = formData.get('email') as string;
  const phone = formData.get('phone') as string;
  const linkedin_url = formData.get('linkedin_url') as string;
  const message = formData.get('message') as string;
  const cvFile = formData.get('cv') as File;
  const job_id = formData.get('job_id') as string | null;

  let cv_url = null;

  if (cvFile && cvFile.size > 0) {
    const fileExt = cvFile.name.split('.').pop();
    const fileName = `${Date.now()}_${Math.random().toString(36).substring(7)}.${fileExt}`;
    const filePath = `${fileName}`;

    const { error: uploadError } = await supabase.storage
      .from('cv_uploads')
      .upload(filePath, cvFile);

    if (uploadError) {
      return { error: "Erreur lors de l'upload du CV : " + uploadError.message };
    }

    const { data: { publicUrl } } = supabase.storage
      .from('cv_uploads')
      .getPublicUrl(filePath);
      
    cv_url = publicUrl;
  }

  // 1. Insert into Supabase
  const { error } = await supabase.from('applications').insert({
    job_id: job_id || null, // null means spontaneous application
    first_name,
    last_name,
    email,
    phone,
    linkedin_url,
    message,
    cv_url,
    status: 'nouveau'
  });

  if (error) {
    return { error: error.message };
  }

  // 2. Send Email Notification via Resend
  if (process.env.RESEND_API_KEY) {
    try {
      await resend.emails.send({
        from: 'K-Agency Notifications <onboarding@resend.dev>', // Should be replaced by verified domain in production
        to: ['executive@k-agency.com'], // The agency email that receives the CVs
        subject: `Nouvelle Candidature: ${first_name} ${last_name}`,
        html: `
          <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #eee; border-radius: 8px;">
            <h2 style="color: #1a1a1a; border-bottom: 1px solid #eaeaea; padding-bottom: 10px;">${job_id ? 'Candidature à une offre' : 'Candidature Spontanée'}</h2>
            <p><strong>Candidat:</strong> ${first_name} ${last_name}</p>
            <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
            <p><strong>Téléphone:</strong> ${phone}</p>
            ${linkedin_url ? `<p><strong>LinkedIn:</strong> <a href="${linkedin_url}">${linkedin_url}</a></p>` : ''}
            
            <h3 style="color: #333; margin-top: 20px;">Message du candidat:</h3>
            <div style="background-color: #f9f9f9; padding: 15px; border-radius: 4px; color: #555; white-space: pre-wrap;">
              ${message || 'Aucun message'}
            </div>
            
            ${cv_url ? `
              <div style="margin-top: 20px; padding: 15px; background-color: #f0f7ff; border-radius: 4px; border-left: 4px solid #0066cc;">
                <p style="margin: 0;"><strong>📎 CV Attaché:</strong> <a href="${cv_url}" target="_blank" style="color: #0066cc; font-weight: bold;">Télécharger le CV PDF</a></p>
              </div>
            ` : ''}
            
            <br/><br/>
            <a href="${process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'}/fr/admin/applications" style="display: inline-block; background-color: #000; color: #fff; text-decoration: none; padding: 10px 20px; border-radius: 4px; font-weight: bold;">Voir dans le Dashboard Admin</a>
          </div>
        `
      });
    } catch (emailError) {
      console.error("Failed to send Resend email:", emailError);
      // We don't return an error to the user if the email fails but DB succeeded.
    }
  }

  return { success: true };
}
