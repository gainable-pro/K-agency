'use server';

import { createClient } from '@/utils/supabase/server';
import { Resend } from 'resend';

// Initialize Resend
const resend = new Resend(process.env.RESEND_API_KEY);

export async function submitContact(formData: FormData) {
  const supabase = createClient();
  
  const company_name = formData.get('company_name') as string;
  const contact_name = formData.get('contact_name') as string;
  const role = formData.get('role') as string;
  const email = formData.get('email') as string;
  const phone = formData.get('phone') as string;
  const sector = formData.get('sector') as string;
  const message = formData.get('message') as string;

  // 1. Insert into Supabase
  const { error } = await supabase.from('contacts').insert({
    company_name,
    contact_name,
    role,
    email,
    phone,
    sector,
    message,
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
        to: ['executive@k-agency.com'], // The agency email that receives the leads
        subject: `Nouveau Lead B2B: ${company_name}`,
        html: `
          <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #eee; border-radius: 8px;">
            <h2 style="color: #1a1a1a; border-bottom: 1px solid #eaeaea; padding-bottom: 10px;">Nouvelle demande de recrutement B2B</h2>
            <p><strong>Entreprise:</strong> ${company_name}</p>
            <p><strong>Contact:</strong> ${contact_name} (${role || 'Non spécifié'})</p>
            <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
            <p><strong>Téléphone:</strong> ${phone}</p>
            <p><strong>Secteur:</strong> ${sector || 'Non spécifié'}</p>
            <h3 style="color: #333; margin-top: 20px;">Besoin en recrutement:</h3>
            <div style="background-color: #f9f9f9; padding: 15px; border-radius: 4px; color: #555; white-space: pre-wrap;">
              ${message}
            </div>
            <br/>
            <a href="${process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'}/fr/admin/contacts" style="display: inline-block; background-color: #000; color: #fff; text-decoration: none; padding: 10px 20px; border-radius: 4px; font-weight: bold;">Voir dans le Dashboard Admin</a>
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
