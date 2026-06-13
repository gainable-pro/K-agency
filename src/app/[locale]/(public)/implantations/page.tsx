import { useTranslations } from 'next-intl';
import Image from 'next/image';
import { Briefcase, Building2, Palmtree, Plane, Ship } from 'lucide-react';
import { Link } from '@/i18n/routing';

const cities = [
  {
    id: 'casablanca',
    name: 'Casablanca',
    subtitle: 'La Capitale Économique',
    description: 'Cœur battant de l\'économie marocaine, Casablanca concentre les sièges sociaux des multinationales. Nous y recrutons les profils de haut niveau pour piloter la croissance continentale.',
    sectors: ['Banque & Finance', 'IT & Digital', 'Assurance', 'C-Level Executive'],
    icon: Building2,
    image: '/images/casaport.png',
    color: 'border-blue-500/30'
  },
  {
    id: 'tanger',
    name: 'Tanger',
    subtitle: 'Le Hub Industriel & Logistique',
    description: 'Porte de l\'Europe et hub logistique mondial avec Tanger Med. Notre expertise couvre l\'ensemble de la chaîne de valeur industrielle, de l\'ingénierie à la direction d\'usine.',
    sectors: ['Logistique (Tanger Med)', 'Industrie Automobile', 'Aéronautique', 'Import-Export'],
    icon: Ship,
    image: '/images/logistique.png',
    color: 'border-cyan-500/30'
  },
  {
    id: 'marrakech',
    name: 'Marrakech',
    subtitle: 'L\'Excellence du Service',
    description: 'Capitale du tourisme de luxe et de l\'événementiel international. Nous accompagnons les palaces et les grands acteurs du service dans l\'acquisition de talents d\'exception.',
    sectors: ['Hôtellerie de Luxe', 'Événementiel', 'Immobilier Premium', 'Tourisme'],
    icon: Palmtree,
    image: '/images/hotel.png',
    color: 'border-amber-500/30'
  },
  {
    id: 'fes-meknes',
    name: 'Fès & Meknès',
    subtitle: 'Agro-industrie & Offshoring',
    description: 'Région historique en pleine mutation technologique et agricole. Un bassin de talents immense pour l\'agroalimentaire et les centres de services partagés.',
    sectors: ['Agro-industrie', 'Offshoring', 'Textile', 'Tourisme Culturel'],
    icon: Palmtree,
    image: '/images/human_interview.png',
    color: 'border-emerald-500/30'
  },
  {
    id: 'rabat',
    name: 'Rabat',
    subtitle: 'Technologies & Institutions',
    description: 'Capitale administrative et nouveau pôle d\'excellence technologique (Technopolis). Nous recrutons pour les institutions, les ONG et le secteur de la Tech.',
    sectors: ['Secteur Public & ONG', 'Santé & Pharma', 'Éducation', 'Ingénierie IT'],
    icon: Briefcase,
    image: '/images/human_interview.png', 
    color: 'border-purple-500/30'
  },
  {
    id: 'agadir',
    name: 'Agadir',
    subtitle: 'Pôle Balnéaire & Halieutique',
    description: 'La perle du sud marocain connaît un boom économique majeur. Entre tourisme balnéaire, agriculture moderne et industrie de la pêche, nos experts identifient les meilleurs talents pour soutenir cette dynamique régionale.',
    sectors: ['Tourisme & Hôtellerie', 'Industrie Halieutique', 'Agriculture Moderne', 'Énergies Renouvelables'],
    icon: Plane,
    image: '/images/hotel.png', 
    color: 'border-cyan-500/30'
  }
];

export default function ImplantationsPage() {
  const t = useTranslations('Implantations');

  return (
    <div className="bg-background min-h-screen pt-32 pb-20">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="mb-20">
          <span className="text-primary font-medium uppercase tracking-[0.2em] text-sm mb-6 block">{t('header_tag')}</span>
          <h1 className="text-4xl md:text-5xl font-light tracking-tight mb-6 text-foreground">
            {t('title1')} <br/>
            <span className="font-medium text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-400">{t('title2')}</span>
          </h1>
          <p className="text-muted-foreground font-light leading-relaxed max-w-3xl text-lg">
            {t('subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cities.map((city) => {
            const Icon = city.icon;
            return (
              <div key={city.id} className={`bg-card/40 backdrop-blur-sm border ${city.color} rounded-2xl overflow-hidden hover:border-primary/50 transition-colors group flex flex-col`}>
                <div className="relative h-48 w-full overflow-hidden">
                  <div className="absolute inset-0 bg-black/40 z-10 group-hover:bg-black/20 transition-colors" />
                  <Image 
                    src={city.image} 
                    alt={`Recrutement à ${city.name}`} 
                    fill 
                    className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
                  />
                  <div className="absolute top-4 left-4 z-20 flex items-center gap-2 text-white font-medium bg-black/40 backdrop-blur-md px-3 py-1 rounded-full text-xs">
                    <Icon className="w-3 h-3" /> {city.name}
                  </div>
                </div>
                
                <div className="p-8 flex flex-col flex-1">
                  <span className="text-primary text-xs font-semibold uppercase tracking-wider mb-2">{city.id.toUpperCase()}</span>
                  <h3 className="text-xl font-medium text-foreground mb-4">{city.subtitle}</h3>
                  <p className="text-sm font-light text-muted-foreground mb-8 flex-1 leading-relaxed">
                    {city.description}
                  </p>
                  
                  <div>
                    <h4 className="text-xs font-semibold uppercase tracking-wider text-foreground mb-3">{t('sectors_title')}</h4>
                    <div className="flex flex-wrap gap-2">
                      {city.sectors.map((sector, i) => (
                        <span key={i} className="text-xs bg-foreground/5 text-foreground/80 px-3 py-1 rounded-full border border-border/50">
                          {sector}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="mt-24 bg-primary/5 border-t border-b border-primary/10 py-16 text-center">
        <h2 className="text-3xl font-light mb-6">{t('cta_title')}</h2>
        <p className="text-muted-foreground font-light max-w-2xl mx-auto mb-8">
          {t('cta_desc')}
        </p>
        <Link href="/contact" className="inline-block bg-primary text-primary-foreground px-8 py-4 uppercase tracking-widest text-sm font-medium hover:bg-primary/90 transition-colors rounded-sm shadow-lg shadow-primary/20">
          {t('cta_button')}
        </Link>
      </div>
    </div>
  );
}
