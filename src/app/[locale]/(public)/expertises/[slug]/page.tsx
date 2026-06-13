import { notFound } from 'next/navigation';
import { generateAllCombinations, getCombinationFromSlug } from '@/data/seo-data';
import { ShieldCheck, BrainCircuit, UserCheck, Crosshair, ChevronRight, CheckCircle2, AlertTriangle } from 'lucide-react';
import { Link } from '@/i18n/routing';
import { useTranslations } from 'next-intl';

// 1. Tell Next.js to pre-render all 1000 URLs at build time
export async function generateStaticParams() {
  const combinations = generateAllCombinations();
  return combinations.map((c) => ({
    slug: c.slug,
  }));
}

// 2. Generate unique SEO Metadata for each page
export async function generateMetadata({ params }: { params: { slug: string, locale: string } }) {
  const combination = getCombinationFromSlug(params.slug);
  
  if (!combination) {
    return { title: 'Non trouvé' };
  }

  const { role, sector, city } = combination;

  return {
    title: `Recrutement ${role.name} en ${sector.name} à ${city.name} | K-Agency`,
    description: `À l'ère de l'IA, dénicher le vrai talent est complexe. Découvrez notre méthodologie humaine et sécurisée pour le recrutement de votre prochain ${role.name} à ${city.name} dans le secteur ${sector.name}.`,
    alternates: {
      canonical: `https://k-agency.com/${params.locale}/expertises/${params.slug}`,
    },
    openGraph: {
      title: `Cabinet de Recrutement ${role.name} | ${city.name}`,
      description: `Cabinet de chasse de têtes spécialisé en ${sector.name} à ${city.name}. Approche directe et sécurisée.`,
    }
  };
}

// 3. The actual Page Component
export default function ProgrammaticSeoPage({ params }: { params: { slug: string, locale: string } }) {
  const t = useTranslations('SeoEngine');
  const combination = getCombinationFromSlug(params.slug);
  
  if (!combination) {
    notFound();
  }

  const { role, sector, city } = combination;

  return (
    <div className="bg-background min-h-screen pt-24 pb-20">
      
      {/* Dynamic JSON-LD Schema for Google */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": `Service de recrutement ${role.name} à ${city.name}`,
            "provider": {
              "@type": "LocalBusiness",
              "name": "K-Agency",
              "address": {
                "@type": "PostalAddress",
                "addressCountry": "MA",
                "addressLocality": city.name
              }
            },
            "areaServed": {
              "@type": "City",
              "name": city.name
            },
            "description": `Cabinet de chasse de têtes spécialisé pour le recrutement de ${role.name} dans le secteur ${sector.name}.`
          })
        }}
      />

      {/* Hero Section */}
      <div className="relative border-b border-border/40 py-24 overflow-hidden bg-secondary/30">
        <div className="container mx-auto px-6 max-w-7xl relative z-10">
          <span className="text-primary font-medium uppercase tracking-[0.2em] text-sm mb-6 block">
            {t('header_tag')}
          </span>
          <h1 className="text-4xl md:text-5xl font-light tracking-tight mb-6 text-foreground max-w-4xl leading-tight">
            {t('hero_recruitment')} <span className="font-medium text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-400">{role.name}</span> <br/>
            {t('hero_in_sector')} <span className="text-foreground/90">{sector.name}</span> {t('hero_at')} {city.name}.
          </h1>
          <p className="text-xl text-muted-foreground font-light leading-relaxed max-w-3xl mb-8">
            {t('hero_desc', { city: `${city.name} (${city.focus.toLowerCase()})` })}
          </p>
          <Link href="/contact" className="inline-flex items-center gap-3 bg-foreground text-background px-8 py-4 uppercase tracking-widest text-sm font-medium hover:bg-primary transition-colors duration-300 rounded-sm">
            {t('hero_btn')} <ChevronRight className="w-4 h-4" />
          </Link>
        </div>
      </div>

      {/* The Core Message: AI vs Human */}
      <div className="container mx-auto px-6 max-w-7xl py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl font-light tracking-tight mb-8">
              {t('problem_title1')} <br/>
              <span className="font-medium">{t('problem_title2')}</span>
            </h2>
            
            <div className="space-y-6 text-muted-foreground font-light leading-relaxed text-lg">
              <p>
                {t('problem_p1')}
              </p>
              
              <div className="bg-destructive/10 border border-destructive/20 p-6 rounded-xl my-6">
                <h3 className="text-destructive font-medium flex items-center gap-2 mb-3">
                  <AlertTriangle className="w-5 h-5" /> {t('problem_alert_title')}
                </h3>
                <p className="text-sm">
                  {t('problem_alert_desc')}
                </p>
              </div>

              <p>
                {t('problem_p2')}
              </p>
            </div>
          </div>
          
          <div className="bg-card/40 backdrop-blur-md border border-border/50 p-10 rounded-xl shadow-xl shadow-black/20">
            <h3 className="text-2xl font-light mb-8 text-foreground flex items-center gap-3">
              <ShieldCheck className="w-6 h-6 text-primary" />
              {t('solution_title1')}<br/>{t('solution_title2')}
            </h3>
            
            <ul className="space-y-6">
              <li className="flex items-start">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0 mr-4">
                  <UserCheck className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h4 className="text-foreground font-medium mb-1">{t('sol1_title')}</h4>
                  <p className="text-sm text-muted-foreground font-light">{t('sol1_desc')}</p>
                </div>
              </li>
              <li className="flex items-start">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0 mr-4">
                  <BrainCircuit className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h4 className="text-foreground font-medium mb-1">{t('sol2_title')}</h4>
                  <p className="text-sm text-muted-foreground font-light">{t('sol2_desc')}</p>
                </div>
              </li>
              <li className="flex items-start">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0 mr-4">
                  <Crosshair className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h4 className="text-foreground font-medium mb-1">{t('sol3_title')}</h4>
                  <p className="text-sm text-muted-foreground font-light">{t('sol3_desc')}</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-primary/5 border-t border-b border-primary/10 py-16 text-center">
        <div className="container mx-auto px-6 max-w-4xl">
          <h2 className="text-3xl font-light mb-6">{t('cta_title')} {city.name}</h2>
          <p className="text-muted-foreground font-light mb-8 text-lg">
            {t('cta_desc')} {sector.name}.
          </p>
          <Link href="/contact" className="inline-flex items-center gap-3 bg-primary text-primary-foreground px-8 py-4 uppercase tracking-widest text-sm font-medium hover:bg-primary/90 transition-colors rounded-sm shadow-lg shadow-primary/20">
            {t('cta_btn')} <ChevronRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}
