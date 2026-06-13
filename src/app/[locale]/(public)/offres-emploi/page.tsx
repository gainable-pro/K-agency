import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/routing';
import { Briefcase, MapPin, Search } from 'lucide-react';

export default function OffresEmploiPage() {
  const t = useTranslations('Offres');

  // Mock data for the UI while Supabase is empty
  const mockJobs = [
    { id: 1, title: t('job_1_title'), company: t('job_1_company'), location: t('job_1_location'), sector: t('job_1_sector'), type: 'CDI' },
    { id: 2, title: t('job_2_title'), company: t('job_2_company'), location: t('job_2_location'), sector: t('job_2_sector'), type: 'CDI' },
    { id: 3, title: t('job_3_title'), company: t('job_3_company'), location: t('job_3_location'), sector: t('job_3_sector'), type: 'CDI' },
    { id: 4, title: t('job_4_title'), company: t('job_4_company'), location: t('job_4_location'), sector: t('job_4_sector'), type: 'CDI' },
  ];

  return (
    <div className="bg-background min-h-screen pt-24 pb-20">
      {/* Header Section */}
      <div className="bg-muted/20 border-b border-border/40 py-16">
        <div className="container mx-auto px-6 max-w-7xl">
          <h1 className="text-4xl md:text-5xl font-light tracking-tight mb-4">{t('title_1')} <span className="font-medium">{t('title_2')}</span></h1>
          <p className="text-muted-foreground text-lg max-w-2xl font-light">
            {t('subtitle')}
          </p>
          
          {/* Search Bar */}
          <div className="mt-8 relative max-w-3xl flex items-center">
            <Search className="absolute left-4 text-muted-foreground w-5 h-5" />
            <input 
              type="text" 
              placeholder={t('search_placeholder')}
              className="w-full bg-background border border-border/50 text-foreground pl-12 pr-4 py-4 rounded-none focus:outline-none focus:border-primary/50 transition-colors"
            />
            <button className="absolute right-2 top-2 bottom-2 bg-foreground text-background px-6 uppercase tracking-widest text-xs font-medium hover:bg-primary transition-colors">
              {t('search_btn')}
            </button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-6 max-w-7xl mt-12 grid grid-cols-1 lg:grid-cols-4 gap-12">
        {/* Filters Sidebar */}
        <aside className="lg:col-span-1">
          <h2 className="uppercase tracking-widest text-xs font-medium mb-6 pb-2 border-b border-border/50">{t('filter_title')}</h2>
          
          <div className="mb-8">
            <h3 className="text-sm font-medium mb-4">{t('filter_sector')}</h3>
            <div className="space-y-3">
              {[
                { key: 'filter_sector_finance', label: t('filter_sector_finance') },
                { key: 'filter_sector_tech', label: t('filter_sector_tech') },
                { key: 'filter_sector_logistics', label: t('filter_sector_logistics') },
                { key: 'filter_sector_realestate', label: t('filter_sector_realestate') }
              ].map(sector => (
                <label key={sector.key} className="flex items-center space-x-3 cursor-pointer group">
                  <input type="checkbox" className="form-checkbox bg-transparent border-border/50 text-primary focus:ring-primary/20 rounded-none w-4 h-4" />
                  <span className="text-sm text-muted-foreground group-hover:text-foreground transition-colors">{sector.label}</span>
                </label>
              ))}
            </div>
          </div>

          <div className="mb-8">
            <h3 className="text-sm font-medium mb-4">{t('filter_location')}</h3>
            <div className="space-y-3">
              {[
                { key: 'morocco', label: t('filter_loc_morocco') },
                { key: 'france', label: t('filter_loc_france') },
                { key: 'switzerland', label: t('filter_loc_switzerland') },
                { key: 'italy', label: t('filter_loc_italy') }
              ].map(loc => (
                <label key={loc.key} className="flex items-center space-x-3 cursor-pointer group">
                  <input type="checkbox" className="form-checkbox bg-transparent border-border/50 text-primary focus:ring-primary/20 rounded-none w-4 h-4" />
                  <span className="text-sm text-muted-foreground group-hover:text-foreground transition-colors">{loc.label}</span>
                </label>
              ))}
            </div>
          </div>
        </aside>

        {/* Job List */}
        <div className="lg:col-span-3">
          <div className="mb-6 flex justify-between items-center">
            <span className="text-sm text-muted-foreground font-light">{mockJobs.length} {t('results_found')}</span>
            <select className="bg-transparent border-none text-sm text-foreground focus:ring-0 cursor-pointer outline-none">
              <option>{t('sort_recent')}</option>
              <option>{t('sort_relevance')}</option>
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
                      {t('job_view')}
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 flex justify-center">
            <button className="border-b border-foreground pb-1 text-sm uppercase tracking-widest font-medium hover:text-primary hover:border-primary transition-colors">
              {t('load_more')}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
