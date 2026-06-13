'use client';

import { Link } from '@/i18n/routing';
import { useTranslations } from 'next-intl';
import LanguageSwitcher from './LanguageSwitcher';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function Header() {
  const t = useTranslations('Header');
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 z-50 w-full border-b border-border/20 bg-black/40 backdrop-blur-md">
      <div className="container flex h-20 items-center justify-between px-6 mx-auto">
        <div className="flex items-center gap-12">
          <Link href="/" className="flex items-center space-x-2" onClick={() => setIsOpen(false)}>
            <span className="font-light text-2xl tracking-[0.15em] text-foreground uppercase">
              K<span className="text-primary">-</span>Agency
            </span>
          </Link>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8 text-[13px] uppercase tracking-widest font-light">
            <Link href="/recrutement" className="transition-colors hover:text-primary text-foreground/70">{t('recruitment')}</Link>
            <Link href="/chasse-de-tetes" className="transition-colors hover:text-primary text-foreground/70">{t('executive_search')}</Link>
            <Link href="/implantations" className="transition-colors hover:text-primary text-foreground/70">{t('implantations')}</Link>
            <Link href="/offres-emploi" className="transition-colors hover:text-primary text-foreground/70">{t('jobs')}</Link>
          </nav>
        </div>

        <div className="flex items-center gap-4 md:gap-6">
          <nav className="flex items-center gap-4 md:gap-6">
            <LanguageSwitcher />
            
            <Link href="/contact" className="hidden md:block text-[13px] uppercase tracking-widest font-light text-foreground/70 hover:text-primary transition-colors">
              {t('contact')}
            </Link>
            <Link href="/deposer-cv" className="hidden sm:inline-flex items-center justify-center px-6 py-2.5 text-xs uppercase tracking-widest border border-primary text-primary hover:bg-primary hover:text-white transition-all duration-300">
              {t('drop_cv')}
            </Link>

            {/* Mobile Menu Toggle Button (Troi barre) */}
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden flex items-center justify-center p-2 text-foreground/80 hover:text-primary transition-colors"
              aria-label="Toggle Menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </nav>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {isOpen && (
        <div className="mobile-nav-drawer md:hidden fixed inset-x-0 top-20 bottom-0 border-t border-border/20 flex flex-col justify-between p-8 animate-in fade-in duration-200">
          <nav className="flex flex-col space-y-6 text-lg uppercase tracking-widest font-light mt-8">
            <Link 
              href="/recrutement" 
              onClick={() => setIsOpen(false)}
              className="hover:text-primary transition-colors py-2 border-b border-border/10"
            >
              {t('recruitment')}
            </Link>
            <Link 
              href="/chasse-de-tetes" 
              onClick={() => setIsOpen(false)}
              className="hover:text-primary transition-colors py-2 border-b border-border/10"
            >
              {t('executive_search')}
            </Link>
            <Link 
              href="/implantations" 
              onClick={() => setIsOpen(false)}
              className="hover:text-primary transition-colors py-2 border-b border-border/10"
            >
              {t('implantations')}
            </Link>
            <Link 
              href="/offres-emploi" 
              onClick={() => setIsOpen(false)}
              className="hover:text-primary transition-colors py-2 border-b border-border/10"
            >
              {t('jobs')}
            </Link>
            <Link 
              href="/contact" 
              onClick={() => setIsOpen(false)}
              className="hover:text-primary transition-colors py-2 border-b border-border/10"
            >
              {t('contact')}
            </Link>
          </nav>

          <div className="flex flex-col gap-4 mt-auto pb-12">
            <Link 
              href="/deposer-cv" 
              onClick={() => setIsOpen(false)}
              className="inline-flex items-center justify-center w-full py-4 text-sm uppercase tracking-widest border border-primary text-primary hover:bg-primary hover:text-white transition-all duration-300 text-center"
            >
              {t('drop_cv')}
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
