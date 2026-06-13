import { Link } from '@/i18n/routing';
import { useTranslations } from 'next-intl';
import LanguageSwitcher from './LanguageSwitcher';

export default function Header() {
  const t = useTranslations('Header');

  return (
    <header className="fixed top-0 z-50 w-full border-b border-border/20 bg-background/40 backdrop-blur-md">
      <div className="container flex h-20 items-center justify-between px-6 mx-auto">
        <div className="flex items-center gap-12">
          <Link href="/" className="flex items-center space-x-2">
            <span className="font-light text-2xl tracking-[0.15em] text-foreground uppercase">
              K<span className="text-primary">-</span>Agency
            </span>
          </Link>
          <nav className="hidden md:flex items-center space-x-8 text-[13px] uppercase tracking-widest font-light">
            <Link href="/recrutement" className="transition-colors hover:text-primary text-foreground/70">{t('recruitment')}</Link>
            <Link href="/chasse-de-tetes" className="transition-colors hover:text-primary text-foreground/70">{t('executive_search')}</Link>
            <Link href="/implantations" className="transition-colors hover:text-primary text-foreground/70">{t('implantations')}</Link>
            <Link href="/offres-emploi" className="transition-colors hover:text-primary text-foreground/70">{t('jobs')}</Link>
          </nav>
        </div>
        <div className="flex items-center gap-6">
          <nav className="flex items-center gap-6">
            <LanguageSwitcher />
            <Link href="/contact" className="hidden md:block text-[13px] uppercase tracking-widest font-light text-foreground/70 hover:text-primary transition-colors">
              {t('contact')}
            </Link>
            <Link href="/deposer-cv" className="inline-flex items-center justify-center px-6 py-2.5 text-xs uppercase tracking-widest border border-primary text-primary hover:bg-primary hover:text-white transition-all duration-300">
              {t('drop_cv')}
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}
