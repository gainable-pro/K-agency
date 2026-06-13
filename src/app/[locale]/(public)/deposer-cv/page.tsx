'use client';

import { useTranslations } from 'next-intl';
import Image from 'next/image';
import { useState, useRef } from 'react';
import { submitApplication } from '@/app/actions/application';

export default function DeposerCVPage() {
  const t = useTranslations('DeposerCV');
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setSuccess(false);

    const formData = new FormData(e.currentTarget);
    const result = await submitApplication(formData);

    if (result.error) {
      setError(result.error);
    } else {
      setSuccess(true);
      (e.target as HTMLFormElement).reset();
    }
    setLoading(false);
  };

  return (
    <div className="bg-background min-h-screen pt-24 pb-20">
      <div className="container mx-auto px-6 max-w-7xl mt-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          
          {/* Info Side */}
          <div>
            <span className="text-primary font-light uppercase tracking-[0.2em] text-sm mb-6 block">Candidature Spontanée</span>
            <h1 className="text-4xl md:text-5xl font-light tracking-tight mb-6 text-foreground">
              {t('title')}
            </h1>
            <p className="text-xl text-primary mb-6 font-medium">
              {t('subtitle')}
            </p>
            <p className="text-muted-foreground font-light leading-relaxed mb-12">
              {t('intro')}
            </p>

            <div className="relative h-[300px] w-full hidden md:block rounded-xl overflow-hidden shadow-xl shadow-black/20">
              <Image 
                src="/images/artistic.png" 
                alt="Talent Network" 
                fill 
                className="object-cover opacity-60 grayscale hover:grayscale-0 transition-all duration-700"
              />
            </div>
          </div>

          {/* Form Side */}
          <div className="bg-card/40 backdrop-blur-md border border-border/50 p-8 md:p-12 shadow-xl shadow-black/10 rounded-xl">
            
            {success && (
              <div className="bg-green-500/10 border border-green-500/20 text-green-500 px-4 py-4 rounded-md mb-6">
                Votre candidature a été envoyée avec succès. Notre équipe va l'examiner rapidement.
              </div>
            )}

            {error && (
              <div className="bg-destructive/10 border border-destructive/20 text-destructive px-4 py-4 rounded-md mb-6">
                Une erreur est survenue: {error}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground/80">{t('form_fname')} *</label>
                  <input name="first_name" type="text" className="w-full bg-background/50 border border-border/50 px-4 py-3 text-foreground focus:outline-none focus:border-primary transition-colors rounded-sm" required />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground/80">{t('form_lname')} *</label>
                  <input name="last_name" type="text" className="w-full bg-background/50 border border-border/50 px-4 py-3 text-foreground focus:outline-none focus:border-primary transition-colors rounded-sm" required />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground/80">{t('form_email')} *</label>
                  <input name="email" type="email" className="w-full bg-background/50 border border-border/50 px-4 py-3 text-foreground focus:outline-none focus:border-primary transition-colors rounded-sm" required />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground/80">{t('form_phone')} *</label>
                  <input name="phone" type="tel" className="w-full bg-background/50 border border-border/50 px-4 py-3 text-foreground focus:outline-none focus:border-primary transition-colors rounded-sm" required />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground/80">{t('form_linkedin')}</label>
                <input name="linkedin_url" type="url" className="w-full bg-background/50 border border-border/50 px-4 py-3 text-foreground focus:outline-none focus:border-primary transition-colors rounded-sm" placeholder="https://linkedin.com/in/..." />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground/80">{t('form_cv')}</label>
                <div 
                  className="border-2 border-dashed border-border/50 bg-background/50 hover:border-primary/50 transition-colors px-6 py-10 text-center cursor-pointer rounded-sm"
                  onClick={() => fileInputRef.current?.click()}
                >
                  <p className="text-sm text-muted-foreground">Cliquez ici pour sélectionner votre CV</p>
                  <p className="text-xs text-muted-foreground/60 mt-2">PDF uniquement, max 5Mo</p>
                  <input ref={fileInputRef} name="cv" type="file" accept=".pdf" className="hidden" />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground/80">{t('form_message')}</label>
                <textarea name="message" rows={4} className="w-full bg-background/50 border border-border/50 px-4 py-3 text-foreground focus:outline-none focus:border-primary transition-colors rounded-sm"></textarea>
              </div>

              <button type="submit" disabled={loading} className="w-full bg-primary text-primary-foreground py-4 uppercase tracking-widest text-sm font-medium hover:bg-primary/90 transition-colors duration-300 rounded-sm disabled:opacity-50">
                {loading ? 'Envoi...' : t('form_submit')}
              </button>
            </form>
          </div>

        </div>
      </div>
    </div>
  );
}
