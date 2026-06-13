import { useTranslations } from 'next-intl';
import { Briefcase, EyeOff, ShieldCheck, TrendingUp, CheckCircle2 } from 'lucide-react';
import Image from 'next/image';

export default function ExecutiveSearchPage() {
  const t = useTranslations('ChasseDeTetes');

  return (
    <div className="bg-background min-h-screen pt-24 pb-20">
      {/* Hero Section */}
      <div className="relative border-b border-border/40 py-32 overflow-hidden bg-secondary/30">
        <div className="container relative z-20 mx-auto px-6 max-w-7xl">
          <div className="max-w-3xl">
            <span className="text-primary font-medium uppercase tracking-[0.2em] text-sm mb-6 block">{t('tag')}</span>
            <h1 className="text-4xl md:text-6xl font-light tracking-tight mb-6 text-foreground">
              {t('title')}
            </h1>
            <p className="text-xl text-primary mb-6 font-medium tracking-wide">
              {t('subtitle')}
            </p>
            <p className="text-muted-foreground text-lg font-light leading-relaxed">
              {t('intro')}
            </p>
          </div>
        </div>
      </div>

      {/* Human Interview Section */}
      <div className="container mx-auto px-6 max-w-7xl py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1 relative h-[500px] rounded-xl overflow-hidden shadow-2xl">
            <Image 
              src="/images/human_interview.png" 
              alt="Entretien de recrutement chaleureux" 
              fill 
              className="object-cover"
            />
          </div>
          <div className="order-1 lg:order-2">
            <h2 className="text-3xl font-light tracking-tight mb-6">{t('partnership_title')}</h2>
            <div className="h-px w-24 bg-primary mb-8"></div>
            <div className="space-y-6 text-muted-foreground font-light leading-relaxed text-lg">
              <p>
                {t('partnership_p1')}
              </p>
              <p>
                {t('partnership_p2')}
              </p>
              <ul className="space-y-4 mt-8">
                <li className="flex items-start">
                  <CheckCircle2 className="w-6 h-6 text-primary mr-3 shrink-0" />
                  <span className="text-foreground font-medium">{t('partnership_item1')}</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="w-6 h-6 text-primary mr-3 shrink-0" />
                  <span className="text-foreground font-medium">{t('partnership_item2')}</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="w-6 h-6 text-primary mr-3 shrink-0" />
                  <span className="text-foreground font-medium">{t('partnership_item3')}</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* CEO Reverse Headhunting Section */}
      <div className="bg-primary/5 border-t border-b border-primary/10 py-24 relative overflow-hidden">
        {/* Abstract background element */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-primary/10 to-transparent pointer-events-none" />
        
        <div className="container mx-auto px-6 max-w-7xl relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-primary font-medium uppercase tracking-[0.2em] text-sm mb-6 block flex items-center gap-2">
                <ShieldCheck className="w-4 h-4" /> {t('reverse_tag')}
              </span>
              <h2 className="text-3xl md:text-4xl font-light tracking-tight mb-6">
                {t('reverse_title1')} <br />
                <span className="font-medium text-foreground/80">{t('reverse_title2')}</span>
              </h2>
              <div className="space-y-6 text-muted-foreground font-light leading-relaxed text-lg">
                <p>
                  {t('reverse_p1')}
                </p>
                <p>
                  {t('reverse_p2')}
                </p>
                <p className="border-l-2 border-primary pl-4 text-foreground/80 italic">
                  {t('reverse_quote')}
                </p>
              </div>

              {/* The New Confidential Exchange Image */}
              <div className="relative h-48 md:h-64 w-full rounded-xl overflow-hidden shadow-2xl mt-12 border border-border/50">
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent z-10 pointer-events-none" />
                <Image 
                  src="/images/business_card_exchange.png" 
                  alt="Échange de carte de visite confidentiel" 
                  fill 
                  className="object-cover grayscale hover:grayscale-0 transition-all duration-700"
                />
              </div>
            </div>
            
            <div className="bg-card/60 backdrop-blur-md border border-border/50 p-10 rounded-xl shadow-xl shadow-black/20">
              <h3 className="text-xl font-light mb-6 text-foreground">{t('reverse_meth_title')}</h3>
              <ul className="space-y-6">
                <li className="flex items-start">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0 mr-4">
                    <span className="text-primary font-medium text-sm">01</span>
                  </div>
                  <div>
                    <h4 className="text-foreground font-medium mb-1">{t('reverse_meth1_title')}</h4>
                    <p className="text-sm text-muted-foreground font-light">{t('reverse_meth1_desc')}</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0 mr-4">
                    <span className="text-primary font-medium text-sm">02</span>
                  </div>
                  <div>
                    <h4 className="text-foreground font-medium mb-1">{t('reverse_meth2_title')}</h4>
                    <p className="text-sm text-muted-foreground font-light">{t('reverse_meth2_desc')}</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0 mr-4">
                    <span className="text-primary font-medium text-sm">03</span>
                  </div>
                  <div>
                    <h4 className="text-foreground font-medium mb-1">{t('reverse_meth3_title')}</h4>
                    <p className="text-sm text-muted-foreground font-light">{t('reverse_meth3_desc')}</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Methodology Section */}
      <div className="bg-muted/30 border-t border-border/40 py-24">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="mb-16 text-center">
            <h2 className="text-3xl font-light tracking-tight">{t('methodology_title')}</h2>
            <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">{t('methodology_subtitle')}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Meth 1 */}
            <div className="bg-card/40 backdrop-blur-md border border-border/50 p-8 rounded-xl shadow-xl shadow-black/10 hover:border-primary/30 transition-all flex gap-6">
              <div className="shrink-0">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <Briefcase className="w-6 h-6 text-primary" strokeWidth={1.5} />
                </div>
              </div>
              <div>
                <h3 className="text-lg font-medium mb-2">{t('meth1_title')}</h3>
                <p className="text-muted-foreground font-light leading-relaxed">{t('meth1_desc')}</p>
              </div>
            </div>
            
            {/* Meth 2 */}
            <div className="bg-card/40 backdrop-blur-md border border-border/50 p-8 rounded-xl shadow-xl shadow-black/10 hover:border-primary/30 transition-all flex gap-6">
              <div className="shrink-0">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <EyeOff className="w-6 h-6 text-primary" strokeWidth={1.5} />
                </div>
              </div>
              <div>
                <h3 className="text-lg font-medium mb-2">{t('meth2_title')}</h3>
                <p className="text-muted-foreground font-light leading-relaxed">{t('meth2_desc')}</p>
              </div>
            </div>

            {/* Meth 3 */}
            <div className="bg-card/40 backdrop-blur-md border border-border/50 p-8 rounded-xl shadow-xl shadow-black/10 hover:border-primary/30 transition-all flex gap-6">
              <div className="shrink-0">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <ShieldCheck className="w-6 h-6 text-primary" strokeWidth={1.5} />
                </div>
              </div>
              <div>
                <h3 className="text-lg font-medium mb-2">{t('meth3_title')}</h3>
                <p className="text-muted-foreground font-light leading-relaxed">{t('meth3_desc')}</p>
              </div>
            </div>

            {/* Meth 4 */}
            <div className="bg-card/40 backdrop-blur-md border border-border/50 p-8 rounded-xl shadow-xl shadow-black/10 hover:border-primary/30 transition-all flex gap-6">
              <div className="shrink-0">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <TrendingUp className="w-6 h-6 text-primary" strokeWidth={1.5} />
                </div>
              </div>
              <div>
                <h3 className="text-lg font-medium mb-2">{t('meth4_title')}</h3>
                <p className="text-muted-foreground font-light leading-relaxed">{t('meth4_desc')}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
