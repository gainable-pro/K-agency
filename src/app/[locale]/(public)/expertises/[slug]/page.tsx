import { notFound } from 'next/navigation';
import { generateAllCombinations, getCombinationFromSlug } from '@/data/seo-data';
import { ShieldCheck, BrainCircuit, UserCheck, Crosshair, ChevronRight, CheckCircle2, AlertTriangle } from 'lucide-react';
import { Link } from '@/i18n/routing';

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
            Expertise Sectorielle & Locale
          </span>
          <h1 className="text-4xl md:text-5xl font-light tracking-tight mb-6 text-foreground max-w-4xl leading-tight">
            Recrutement de <span className="font-medium text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-400">{role.name}</span> <br/>
            dans le secteur <span className="text-foreground/90">{sector.name}</span> à {city.name}.
          </h1>
          <p className="text-xl text-muted-foreground font-light leading-relaxed max-w-3xl mb-8">
            Pour soutenir la dynamique de {city.name} ({city.focus.toLowerCase()}), attirer les meilleurs C-Levels est crucial. Mais comment s'assurer de leur réelle compétence ?
          </p>
          <Link href="/contact" className="inline-flex items-center gap-3 bg-foreground text-background px-8 py-4 uppercase tracking-widest text-sm font-medium hover:bg-primary transition-colors duration-300 rounded-sm">
            Démarrer une recherche <ChevronRight className="w-4 h-4" />
          </Link>
        </div>
      </div>

      {/* The Core Message: AI vs Human */}
      <div className="container mx-auto px-6 max-w-7xl py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl font-light tracking-tight mb-8">
              Le recrutement à l'ère de l'Intelligence Artificielle : <br/>
              <span className="font-medium">Une illusion de perfection</span>
            </h2>
            
            <div className="space-y-6 text-muted-foreground font-light leading-relaxed text-lg">
              <p>
                Aujourd'hui, recruter un <strong className="text-foreground/80">{role.name}</strong> est devenu un véritable défi. Pourquoi ? Parce que l'Intelligence Artificielle générative a bouleversé les codes de la candidature.
              </p>
              
              <div className="bg-destructive/10 border border-destructive/20 p-6 rounded-xl my-6">
                <h3 className="text-destructive font-medium flex items-center gap-2 mb-3">
                  <AlertTriangle className="w-5 h-5" /> L'Inconvénient des processus digitaux classiques
                </h3>
                <p className="text-sm">
                  Des CVs parfaits générés en 5 secondes, des lettres de motivation lissées par ChatGPT, et même des assistants IA capables de réussir des tests cognitifs en ligne à la place du candidat. Les profils "parfaits sur le papier" sont devenus indétectables des véritables leaders. L'hyper-automatisation fausse votre jugement.
                </p>
              </div>

              <p>
                Pour un poste stratégique comme celui de <strong className="text-foreground/80">{role.name}</strong>, vous ne pouvez pas confier l'avenir de votre entreprise à un algorithme de matching de mots-clés.
              </p>
            </div>
          </div>
          
          <div className="bg-card/40 backdrop-blur-md border border-border/50 p-10 rounded-xl shadow-xl shadow-black/20">
            <h3 className="text-2xl font-light mb-8 text-foreground flex items-center gap-3">
              <ShieldCheck className="w-6 h-6 text-primary" />
              L'Avantage K-Agency :<br/>Le retour au "Real Human"
            </h3>
            
            <ul className="space-y-6">
              <li className="flex items-start">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0 mr-4">
                  <UserCheck className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h4 className="text-foreground font-medium mb-1">Intelligence Émotionnelle</h4>
                  <p className="text-sm text-muted-foreground font-light">Notre évaluation ne se base pas sur un CV, mais sur une rencontre en profondeur. Nous testons le leadership, la gestion du stress et le "fit" culturel.</p>
                </div>
              </li>
              <li className="flex items-start">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0 mr-4">
                  <BrainCircuit className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h4 className="text-foreground font-medium mb-1">Mises en situation réelles</h4>
                  <p className="text-sm text-muted-foreground font-light">L'IA ne peut pas simuler l'expérience terrain. Nous challengons les candidats sur des Business Cases complexes liés au marché de {city.name}.</p>
                </div>
              </li>
              <li className="flex items-start">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0 mr-4">
                  <Crosshair className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h4 className="text-foreground font-medium mb-1">Back-channeling (Prise de références)</h4>
                  <p className="text-sm text-muted-foreground font-light">Une enquête de réputation approfondie auprès d'anciens N+1 et N-1, impossible à falsifier par un candidat.</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-primary/5 border-t border-b border-primary/10 py-16 text-center">
        <div className="container mx-auto px-6 max-w-4xl">
          <h2 className="text-3xl font-light mb-6">Confiez-nous la recherche de votre {role.name} à {city.name}</h2>
          <p className="text-muted-foreground font-light mb-8 text-lg">
            Nous avons le réseau et la méthodologie pour approcher les profils passifs les plus performants dans le domaine : {sector.name}.
          </p>
          <Link href="/contact" className="inline-flex items-center gap-3 bg-primary text-primary-foreground px-8 py-4 uppercase tracking-widest text-sm font-medium hover:bg-primary/90 transition-colors rounded-sm shadow-lg shadow-primary/20">
            Discuter de votre besoin <ChevronRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}
