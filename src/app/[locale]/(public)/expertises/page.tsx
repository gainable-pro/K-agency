import { Link } from '@/i18n/routing';
import { SEO_CITIES, SEO_SECTORS, SEO_ROLES } from '@/data/seo-data';

export default function ExpertisesIndexPage() {
  return (
    <div className="bg-background min-h-screen pt-32 pb-20">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="mb-16">
          <span className="text-primary font-medium uppercase tracking-[0.2em] text-sm mb-6 block">Nos Domaines d'Intervention</span>
          <h1 className="text-4xl md:text-5xl font-light tracking-tight mb-6 text-foreground">
            Index des Expertises
          </h1>
          <p className="text-muted-foreground font-light leading-relaxed max-w-3xl text-lg">
            Retrouvez ici l'ensemble de nos domaines d'expertise par ville, secteur et métier. Notre connaissance pointue des écosystèmes locaux nous permet de vous accompagner sur l'ensemble du territoire marocain.
          </p>
        </div>

        <div className="space-y-16">
          {SEO_CITIES.map((city) => (
            <div key={city.id} className="border-t border-border/20 pt-8">
              <h2 className="text-2xl font-light mb-8 text-foreground flex items-center gap-3">
                <span className="text-primary font-medium">Recrutement à</span> {city.name}
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {SEO_SECTORS.map((sector) => {
                  // Just take a few roles to display per sector to not overwhelm the UI (e.g., max 3)
                  const topRoles = SEO_ROLES.slice(0, 3);
                  
                  return (
                    <div key={sector.id} className="bg-card/40 backdrop-blur-sm border border-border/50 p-6 rounded-xl hover:border-primary/30 transition-colors">
                      <h3 className="font-medium text-foreground mb-4">{sector.name}</h3>
                      <ul className="space-y-3">
                        {topRoles.map((role) => (
                          <li key={role.id}>
                            <Link 
                              href={`/expertises/recrutement-${role.id}-${sector.id}-${city.id}`}
                              className="text-sm font-light text-muted-foreground hover:text-primary transition-colors flex items-center gap-2"
                            >
                              <span className="w-1 h-1 rounded-full bg-primary/50" />
                              {role.name}
                            </Link>
                          </li>
                        ))}
                        <li>
                          <span className="text-xs text-muted-foreground/50 italic px-3">+ autres spécialités</span>
                        </li>
                      </ul>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
