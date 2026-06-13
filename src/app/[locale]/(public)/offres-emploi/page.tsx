import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/routing';
import { Briefcase, MapPin, Search } from 'lucide-react';

export default function OffresEmploiPage() {
  const t = useTranslations('Index'); // Adjust if needed

  // Mock data for the UI while Supabase is empty
  const mockJobs = [
    { id: 1, title: 'Directeur Général (H/F)', company: 'Confidentiel', location: 'Casablanca, Maroc', sector: 'Finance & Banque', type: 'CDI' },
    { id: 2, title: 'Chief Technology Officer (CTO)', company: 'Start-up FinTech', location: 'Tanger, Maroc', sector: 'IT & Digital', type: 'CDI' },
    { id: 3, title: 'Directeur Supply Chain Afrique', company: 'Groupe Logistique', location: 'Casa Port, Maroc', sector: 'Logistique', type: 'CDI' },
    { id: 4, title: 'Senior Wealth Manager', company: 'Banque Privée', location: 'Genève, Suisse', sector: 'Finance', type: 'CDI' },
  ];

  return (
    <div className="bg-background min-h-screen pt-24 pb-20">
      {/* Header Section */}
      <div className="bg-muted/20 border-b border-border/40 py-16">
        <div className="container mx-auto px-6 max-w-7xl">
          <h1 className="text-4xl md:text-5xl font-light tracking-tight mb-4">Opportunités <span className="font-medium">Exécutives</span></h1>
          <p className="text-muted-foreground text-lg max-w-2xl font-light">
            Découvrez nos missions confidentielles et opportunités de carrière pour cadres dirigeants et profils hautement qualifiés.
          </p>
          
          {/* Search Bar */}
          <div className="mt-8 relative max-w-3xl flex items-center">
            <Search className="absolute left-4 text-muted-foreground w-5 h-5" />
            <input 
              type="text" 
              placeholder="Rechercher par poste, mot-clé, ville..." 
              className="w-full bg-background border border-border/50 text-foreground pl-12 pr-4 py-4 rounded-none focus:outline-none focus:border-primary/50 transition-colors"
            />
            <button className="absolute right-2 top-2 bottom-2 bg-foreground text-background px-6 uppercase tracking-widest text-xs font-medium hover:bg-primary transition-colors">
              Rechercher
            </button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-6 max-w-7xl mt-12 grid grid-cols-1 lg:grid-cols-4 gap-12">
        {/* Filters Sidebar */}
        <aside className="lg:col-span-1">
          <h2 className="uppercase tracking-widest text-xs font-medium mb-6 pb-2 border-b border-border/50">Filtres</h2>
          
          <div className="mb-8">
            <h3 className="text-sm font-medium mb-4">Secteur d'activité</h3>
            <div className="space-y-3">
              {['Finance & Banque', 'IT & Digital', 'Logistique & Industrie', 'Immobilier & BTP'].map(sector => (
                <label key={sector} className="flex items-center space-x-3 cursor-pointer group">
                  <input type="checkbox" className="form-checkbox bg-transparent border-border/50 text-primary focus:ring-primary/20 rounded-none w-4 h-4" />
                  <span className="text-sm text-muted-foreground group-hover:text-foreground transition-colors">{sector}</span>
                </label>
              ))}
            </div>
          </div>

          <div className="mb-8">
            <h3 className="text-sm font-medium mb-4">Localisation</h3>
            <div className="space-y-3">
              {['Maroc', 'France', 'Suisse', 'Italie'].map(loc => (
                <label key={loc} className="flex items-center space-x-3 cursor-pointer group">
                  <input type="checkbox" className="form-checkbox bg-transparent border-border/50 text-primary focus:ring-primary/20 rounded-none w-4 h-4" />
                  <span className="text-sm text-muted-foreground group-hover:text-foreground transition-colors">{loc}</span>
                </label>
              ))}
            </div>
          </div>
        </aside>

        {/* Job List */}
        <div className="lg:col-span-3">
          <div className="mb-6 flex justify-between items-center">
            <span className="text-sm text-muted-foreground font-light">{mockJobs.length} opportunités trouvées</span>
            <select className="bg-transparent border-none text-sm text-foreground focus:ring-0 cursor-pointer outline-none">
              <option>Les plus récentes</option>
              <option>Pertinence</option>
            </select>
          </div>

          <div className="space-y-4">
            {mockJobs.map(job => (
              <div key={job.id} className="group border border-border/40 bg-card/20 hover:bg-card/40 hover:border-primary/30 p-6 transition-all duration-300">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                  <div>
                    <span className="text-xs uppercase tracking-wider text-primary/80 mb-2 block font-medium">{job.sector}</span>
                    <h3 className="text-xl font-medium mb-2 group-hover:text-primary transition-colors">{job.title}</h3>
                    <div className="flex items-center space-x-6 text-sm text-muted-foreground font-light">
                      <span className="flex items-center"><Briefcase className="w-4 h-4 mr-2 opacity-70" /> {job.company}</span>
                      <span className="flex items-center"><MapPin className="w-4 h-4 mr-2 opacity-70" /> {job.location}</span>
                    </div>
                  </div>
                  <div className="shrink-0">
                    <Link href={`/offres-emploi/${job.id}`} className="inline-flex px-6 py-3 border border-border text-xs uppercase tracking-widest font-medium hover:bg-foreground hover:text-background transition-colors">
                      Voir l'offre
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 flex justify-center">
            <button className="border-b border-foreground pb-1 text-sm uppercase tracking-widest font-medium hover:text-primary hover:border-primary transition-colors">
              Charger plus d'offres
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
