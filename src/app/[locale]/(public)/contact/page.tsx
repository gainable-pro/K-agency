"use client";

import { MapPin, Phone, Mail, Building2, Globe2 } from 'lucide-react';
import Image from 'next/image';
import { useState } from 'react';
import { useTranslations } from 'next-intl';
import { submitContact } from '@/app/actions/contact';

export default function ContactPage() {
  const t = useTranslations('Contact');
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setSuccess(false);

    const formData = new FormData(e.currentTarget);
    const result = await submitContact(formData);

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
            <span className="text-primary font-light uppercase tracking-[0.2em] text-sm mb-6 block">{t('tag')}</span>
            <h1 className="text-4xl md:text-5xl font-light tracking-tight mb-6 text-foreground">
              {t('title')}
            </h1>
            <p className="text-muted-foreground font-light leading-relaxed mb-12 text-lg">
              {t('subtitle')}
            </p>

            <div className="space-y-8">
              {/* HQ Casablanca */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center shrink-0">
                  <Building2 className="text-primary w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-lg font-medium text-foreground mb-1">{t('hq_title')}</h3>
                  <p className="text-muted-foreground font-light text-sm mb-2 flex items-center"><MapPin className="w-4 h-4 mr-2" /> {t('hq_address')}</p>
                  <p className="text-muted-foreground font-light text-sm flex items-center"><Phone className="w-4 h-4 mr-2" /> +212 5 22 00 00 00</p>
                </div>
              </div>

              {/* Bureau Europe */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center shrink-0">
                  <Globe2 className="text-primary w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-lg font-medium text-foreground mb-1">{t('europe_title')}</h3>
                  <p className="text-muted-foreground font-light text-sm mb-2 flex items-center"><MapPin className="w-4 h-4 mr-2" /> {t('europe_address')}</p>
                  <p className="text-muted-foreground font-light text-sm flex items-center"><Mail className="w-4 h-4 mr-2" /> executive@k-agency.com</p>
                </div>
              </div>
            </div>

            <div className="relative h-[250px] w-full hidden md:block mt-12 rounded-lg overflow-hidden shadow-lg">
              <Image 
                src="/images/cfc.png" 
                alt="Casablanca Finance City" 
                fill 
                className="object-cover"
              />
            </div>
          </div>

          {/* Form Side */}
          <div className="bg-card/40 backdrop-blur-md border border-border/50 p-8 md:p-12 shadow-xl shadow-black/10 rounded-xl">
            <h3 className="text-2xl font-light mb-8 text-foreground">{t('form_title')}</h3>
            
            {success && (
              <div className="bg-green-500/10 border border-green-500/20 text-green-500 px-4 py-4 rounded-md mb-6">
                {t('form_success')}
              </div>
            )}

            {error && (
              <div className="bg-destructive/10 border border-destructive/20 text-destructive px-4 py-4 rounded-md mb-6">
                {t('form_error')} {error}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground/80">{t('form_company')} *</label>
                <input name="company_name" type="text" className="w-full bg-background/50 border border-border/50 px-4 py-3 text-foreground focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors rounded-sm" required />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground/80">{t('form_contact')} *</label>
                  <input name="contact_name" type="text" className="w-full bg-background/50 border border-border/50 px-4 py-3 text-foreground focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors rounded-sm" required />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground/80">{t('form_function')}</label>
                  <input name="role" type="text" className="w-full bg-background/50 border border-border/50 px-4 py-3 text-foreground focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors rounded-sm" placeholder={t('form_function_placeholder')} />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground/80">{t('form_email')} *</label>
                  <input name="email" type="email" className="w-full bg-background/50 border border-border/50 px-4 py-3 text-foreground focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors rounded-sm" required />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground/80">{t('form_phone')} *</label>
                  <input name="phone" type="tel" className="w-full bg-background/50 border border-border/50 px-4 py-3 text-foreground focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors rounded-sm" required />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground/80">{t('form_sector')}</label>
                <select name="sector" className="w-full bg-background/50 border border-border/50 px-4 py-3 text-foreground focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors rounded-sm appearance-none cursor-pointer">
                  <option value="">{t('form_sector_select')}</option>
                  <option value="finance">{t('form_sector_finance')}</option>
                  <option value="it">{t('form_sector_tech')}</option>
                  <option value="logistics">{t('form_sector_logistics')}</option>
                  <option value="industry">{t('form_sector_industry')}</option>
                  <option value="other">{t('form_sector_other')}</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground/80">{t('form_need')}</label>
                <textarea name="message" rows={5} className="w-full bg-background/50 border border-border/50 px-4 py-3 text-foreground focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors rounded-sm" placeholder={t('form_need_placeholder')} required></textarea>
              </div>

              <button type="submit" disabled={loading} className="w-full bg-primary text-primary-foreground py-4 uppercase tracking-widest text-sm font-medium hover:bg-primary/90 transition-colors duration-300 rounded-sm disabled:opacity-50">
                {loading ? t('form_sending') : t('form_submit')}
              </button>
              <p className="text-xs text-muted-foreground text-center mt-4">
                {t('form_privacy')}
              </p>
            </form>
          </div>

        </div>
      </div>
    </div>
  );
}
