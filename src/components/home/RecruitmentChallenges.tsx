import { AlertTriangle, FileWarning, RefreshCcw, Globe2 } from 'lucide-react';
import { useTranslations } from 'next-intl';

export default function RecruitmentChallenges() {
  const t = useTranslations('Index.challenges');

  return (
    <section className="py-24 bg-card border-y border-border/40 relative overflow-hidden">
      {/* Decorative background element */}
      <div className="absolute right-0 top-0 w-1/3 h-full bg-primary/5 -skew-x-12 transform origin-top-right z-0"></div>

      <div className="container relative z-10 px-6 mx-auto max-w-7xl">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          
          {/* Left Text Side */}
          <div className="lg:w-1/2">
            <span className="text-primary font-medium uppercase tracking-[0.2em] text-sm mb-4 block">{t('tag')}</span>
            <h2 className="text-3xl md:text-5xl font-light tracking-tight mb-6 text-foreground leading-tight">
              {t('title_1')} <br />
              <span className="font-medium text-primary">{t('title_2')}</span>
            </h2>
            <div className="space-y-6 text-muted-foreground font-light text-lg leading-relaxed">
              <p>
                {t('p1')}
              </p>
              <p>
                {t('p2')}
              </p>
            </div>
            
            <div className="mt-10 pt-10 border-t border-border/50">
              <div className="flex items-center gap-4 text-foreground">
                <Globe2 className="w-10 h-10 text-primary shrink-0" strokeWidth={1} />
                <div>
                  <h4 className="font-medium text-lg">{t('box_title')}</h4>
                  <p className="text-sm text-muted-foreground font-light">{t('box_desc')}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Grid Side (Challenges) */}
          <div className="lg:w-1/2 grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
            {/* Challenge 1 */}
            <div className="bg-card border border-border/50 rounded-xl p-8 hover:border-primary/50 transition-all shadow-xl shadow-black/20 backdrop-blur-sm">
              <div className="mb-6 border border-border/50 w-12 h-12 rounded-lg flex items-center justify-center bg-background/50">
                <RefreshCcw className="w-5 h-5 text-primary" strokeWidth={1.5} />
              </div>
              <h3 className="text-lg font-medium mb-3 text-foreground">{t('c1_title')}</h3>
              <p className="text-sm text-muted-foreground font-light leading-relaxed">
                {t('c1_desc')}
              </p>
            </div>

            {/* Challenge 2 */}
            <div className="bg-card border border-border/50 rounded-xl p-8 hover:border-primary/50 transition-all shadow-xl shadow-black/20 backdrop-blur-sm md:translate-y-8">
              <div className="mb-6 border border-border/50 w-12 h-12 rounded-lg flex items-center justify-center bg-background/50">
                <FileWarning className="w-5 h-5 text-primary" strokeWidth={1.5} />
              </div>
              <h3 className="text-lg font-medium mb-3 text-foreground">{t('c2_title')}</h3>
              <p className="text-sm text-muted-foreground font-light leading-relaxed">
                {t('c2_desc')}
              </p>
            </div>

            {/* Challenge 3 */}
            <div className="bg-card border border-border/50 rounded-xl p-8 hover:border-primary/50 transition-all shadow-xl shadow-black/20 backdrop-blur-sm md:col-span-2 mt-4 md:mt-0">
              <div className="mb-6 border border-border/50 w-12 h-12 rounded-lg flex items-center justify-center bg-background/50">
                <AlertTriangle className="w-5 h-5 text-primary" strokeWidth={1.5} />
              </div>
              <h3 className="text-lg font-medium mb-3 text-foreground">{t('c3_title')}</h3>
              <p className="text-sm text-muted-foreground font-light leading-relaxed">
                {t('c3_desc')}
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
