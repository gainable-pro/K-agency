import { useTranslations } from 'next-intl';
import { Compass, Database, Target, Users, FileText, HeartHandshake, CheckCircle } from 'lucide-react';
import Image from 'next/image';

export default function RecrutementPage() {
  const t = useTranslations('Recrutement');

  return (
    <div className="bg-background min-h-screen pt-24 pb-20">
      {/* Hero Section */}
      <div className="relative border-b border-border/40 py-24 overflow-hidden bg-secondary/30">
        <div className="container relative z-20 mx-auto px-6 max-w-7xl text-center">
          <span className="text-primary font-medium uppercase tracking-[0.2em] text-sm mb-6 block">{t('tag')}</span>
          <h1 className="text-4xl md:text-6xl font-light tracking-tight mb-6 text-foreground">
            {t('title')}
          </h1>
          <p className="text-muted-foreground text-xl max-w-3xl mx-auto font-light leading-relaxed">
            {t('intro')}
          </p>
        </div>
      </div>

      {/* Philosophy Section with Photo */}
      <div className="container mx-auto px-6 max-w-7xl py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-light tracking-tight mb-6 leading-tight">{t('philo_title')}</h2>
            <div className="h-px w-24 bg-primary mb-8"></div>
            <div className="space-y-6 text-muted-foreground font-light leading-relaxed text-lg">
              <p>
                {t('philo_p1')}
              </p>
              <p>
                {t('philo_p2')}
              </p>
              <p>
                {t('philo_p3')}
              </p>
            </div>
          </div>
          
          <div className="relative h-[500px] rounded-xl overflow-hidden shadow-2xl border border-border/30">
            <Image 
              src="/images/team_collaboration.png" 
              alt="Collaboration en entreprise chez K-Agency" 
              fill 
              priority
              className="object-cover"
            />
          </div>
        </div>
      </div>

      {/* 6-Step Approach Section */}
      <div className="bg-card border-t border-b border-border/40 py-24">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-light tracking-tight">{t('approach_title')}</h2>
            <p className="text-muted-foreground mt-4 max-w-3xl mx-auto font-light leading-relaxed">{t('approach_subtitle')}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Step 1 */}
            <div className="bg-card/45 backdrop-blur-md border border-border/50 p-8 rounded-xl shadow-xl shadow-black/10 hover:shadow-primary/5 hover:border-primary/30 transition-all duration-500 flex flex-col">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                <Compass className="w-5 h-5 text-primary" strokeWidth={1.5} />
              </div>
              <span className="text-xs text-primary font-bold tracking-widest uppercase mb-2">Étape 1</span>
              <h3 className="text-lg font-medium mb-4 text-foreground">{t('approach_1_title')}</h3>
              <p className="text-muted-foreground font-light leading-relaxed text-sm flex-1">
                {t('approach_1_desc')}
              </p>
            </div>

            {/* Step 2 */}
            <div className="bg-card/45 backdrop-blur-md border border-border/50 p-8 rounded-xl shadow-xl shadow-black/10 hover:shadow-primary/5 hover:border-primary/30 transition-all duration-500 flex flex-col">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                <Database className="w-5 h-5 text-primary" strokeWidth={1.5} />
              </div>
              <span className="text-xs text-primary font-bold tracking-widest uppercase mb-2">Étape 2</span>
              <h3 className="text-lg font-medium mb-4 text-foreground">{t('approach_2_title')}</h3>
              <p className="text-muted-foreground font-light leading-relaxed text-sm flex-1">
                {t('approach_2_desc')}
              </p>
            </div>

            {/* Step 3 */}
            <div className="bg-card/45 backdrop-blur-md border border-border/50 p-8 rounded-xl shadow-xl shadow-black/10 hover:shadow-primary/5 hover:border-primary/30 transition-all duration-500 flex flex-col">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                <Target className="w-5 h-5 text-primary" strokeWidth={1.5} />
              </div>
              <span className="text-xs text-primary font-bold tracking-widest uppercase mb-2">Étape 3</span>
              <h3 className="text-lg font-medium mb-4 text-foreground">{t('approach_3_title')}</h3>
              <p className="text-muted-foreground font-light leading-relaxed text-sm flex-1">
                {t('approach_3_desc')}
              </p>
            </div>

            {/* Step 4 */}
            <div className="bg-card/45 backdrop-blur-md border border-border/50 p-8 rounded-xl shadow-xl shadow-black/10 hover:shadow-primary/5 hover:border-primary/30 transition-all duration-500 flex flex-col">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                <Users className="w-5 h-5 text-primary" strokeWidth={1.5} />
              </div>
              <span className="text-xs text-primary font-bold tracking-widest uppercase mb-2">Étape 4</span>
              <h3 className="text-lg font-medium mb-4 text-foreground">{t('approach_4_title')}</h3>
              <p className="text-muted-foreground font-light leading-relaxed text-sm flex-1">
                {t('approach_4_desc')}
              </p>
            </div>

            {/* Step 5 */}
            <div className="bg-card/45 backdrop-blur-md border border-border/50 p-8 rounded-xl shadow-xl shadow-black/10 hover:shadow-primary/5 hover:border-primary/30 transition-all duration-500 flex flex-col">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                <FileText className="w-5 h-5 text-primary" strokeWidth={1.5} />
              </div>
              <span className="text-xs text-primary font-bold tracking-widest uppercase mb-2">Étape 5</span>
              <h3 className="text-lg font-medium mb-4 text-foreground">{t('approach_5_title')}</h3>
              <p className="text-muted-foreground font-light leading-relaxed text-sm flex-1">
                {t('approach_5_desc')}
              </p>
            </div>

            {/* Step 6 */}
            <div className="bg-card/45 backdrop-blur-md border border-border/50 p-8 rounded-xl shadow-xl shadow-black/10 hover:shadow-primary/5 hover:border-primary/30 transition-all duration-500 flex flex-col">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                <HeartHandshake className="w-5 h-5 text-primary" strokeWidth={1.5} />
              </div>
              <span className="text-xs text-primary font-bold tracking-widest uppercase mb-2">Étape 6</span>
              <h3 className="text-lg font-medium mb-4 text-foreground">{t('approach_6_title')}</h3>
              <p className="text-muted-foreground font-light leading-relaxed text-sm flex-1">
                {t('approach_6_desc')}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Value Added Section */}
      <div className="bg-secondary/10 py-24 border-b border-border/40">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center">
            <div className="lg:col-span-1">
              <span className="text-primary font-medium uppercase tracking-[0.2em] text-sm mb-4 block">K-Agency Standards</span>
              <h2 className="text-3xl md:text-4xl font-light tracking-tight mb-6 text-foreground leading-tight">
                {t('value_title')}
              </h2>
              <div className="h-px w-24 bg-primary"></div>
            </div>
            
            <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-6">
              {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
                <div key={i} className="flex items-center gap-4 bg-card/35 backdrop-blur-md border border-border/40 p-5 rounded-lg shadow-md hover:border-primary/30 transition-colors">
                  <CheckCircle className="text-primary w-5 h-5 shrink-0" strokeWidth={2} />
                  <span className="text-foreground font-light text-md">{t(`value_item_${i}`)}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Conclusion Section */}
      <div className="container mx-auto px-6 max-w-4xl py-24 text-center">
        <div className="bg-card/45 backdrop-blur-md border border-primary/20 p-10 md:p-14 rounded-2xl shadow-xl shadow-black/15 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-1.5 h-full bg-primary" />
          <p className="text-2xl md:text-3xl font-light leading-relaxed text-foreground italic">
            "{t('conclusion')}"
          </p>
        </div>
      </div>
    </div>
  );
}
