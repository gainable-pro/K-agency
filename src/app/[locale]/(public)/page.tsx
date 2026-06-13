import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/routing';
import HeroCarousel from '@/components/home/HeroCarousel';
import RecruitmentProcess from '@/components/home/RecruitmentProcess';
import RecruitmentChallenges from '@/components/home/RecruitmentChallenges';

export default function Home() {
  const t = useTranslations('Index');

  return (
    <>
      <section className="relative min-h-[90vh] flex items-center pt-20 overflow-hidden">
        {/* Dynamic Background Carousel */}
        <HeroCarousel />

        <div className="container relative z-20 px-6 mx-auto">
          <div className="max-w-5xl">
            <div className="inline-flex items-center space-x-2 mb-8">
              <span className="h-px w-8 bg-primary"></span>
              <span className="text-xs uppercase tracking-[0.3em] text-primary font-light">
                {t('hero_tag')}
              </span>
            </div>
            
            <h1 className="text-5xl md:text-7xl lg:text-[5.5rem] font-extralight tracking-tight mb-8 text-foreground leading-[1.1]">
              {t('hero_title_1')} <br />
              <span className="font-medium text-transparent bg-clip-text bg-gradient-to-r from-foreground to-foreground/50">
                {t('hero_title_2')}
              </span>
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground mb-12 max-w-2xl font-light leading-relaxed">
              {t('hero_desc')}
            </p>
            
            <div className="flex flex-col sm:flex-row items-start gap-6">
              <Link 
                href="/recrutement" 
                className="group relative inline-flex items-center justify-center px-8 py-4 text-sm uppercase tracking-widest text-background bg-foreground overflow-hidden transition-all hover:scale-[1.02]"
              >
                <span className="relative z-10 font-medium">{t('hero_cta_recruit')}</span>
                <div className="absolute inset-0 bg-primary translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out z-0"></div>
              </Link>
              
              <Link 
                href="/offres-emploi" 
                className="group inline-flex items-center justify-center px-8 py-4 text-sm uppercase tracking-widest text-foreground border border-border/50 hover:border-primary/50 transition-colors bg-background/20 backdrop-blur-md"
              >
                <span className="font-light">{t('hero_cta_jobs')}</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Recruitment Challenges Section */}
      <RecruitmentChallenges />

      {/* Recruitment Process Section */}
      <RecruitmentProcess />
      
      {/* Brands Section */}
      <section className="border-t border-border/20 bg-background/50 backdrop-blur-sm relative z-20">
        <div className="container mx-auto px-6 py-12">
          <p className="text-xs font-light text-muted-foreground mb-8 uppercase tracking-[0.2em] text-center">{t('trust_text')}</p>
          <div className="flex flex-wrap justify-center gap-12 md:gap-24 opacity-40 grayscale">
            <div className="text-2xl font-light tracking-tighter">L'ORÉAL</div>
            <div className="text-2xl font-light tracking-tighter">SOCIÉTÉ GÉNÉRALE</div>
            <div className="text-2xl font-light tracking-tighter">RENAULT</div>
            <div className="text-2xl font-light tracking-tighter">DELOITTE</div>
          </div>
        </div>
      </section>
    </>
  );
}
