import { Calendar, Clock, ChevronRight, Headphones, PlayCircle, BookOpen } from 'lucide-react';
import Image from 'next/image';
import { Link } from '@/i18n/routing';
import { useTranslations } from 'next-intl';

const ARTICLES = [
  {
    id: 1,
    titleKey: "art_1_title",
    categoryKey: "art_1_cat",
    date: "12 Juin 2026",
    readTime: "5 min",
    image: "/images/tech_recruitment_morocco.png",
    excerptKey: "art_1_excerpt"
  },
  {
    id: 2,
    titleKey: "art_2_title",
    categoryKey: "art_2_cat",
    date: "05 Juin 2026",
    readTime: "4 min",
    image: "/images/talent_retention_morocco.png",
    excerptKey: "art_2_excerpt"
  },
  {
    id: 3,
    titleKey: "art_3_title",
    categoryKey: "art_3_cat",
    date: "28 Mai 2026",
    readTime: "7 min",
    image: "/images/executive_interview_marrakech.png",
    excerptKey: "art_3_excerpt"
  },
  {
    id: 4,
    titleKey: "art_4_title",
    categoryKey: "art_4_cat",
    date: "22 Mai 2026",
    readTime: "6 min",
    image: "/images/business_card_exchange.png",
    excerptKey: "art_4_excerpt"
  },
  {
    id: 5,
    titleKey: "art_5_title",
    categoryKey: "art_5_cat",
    date: "15 Mai 2026",
    readTime: "8 min",
    image: "/images/team_collaboration.png",
    excerptKey: "art_5_excerpt"
  },
  {
    id: 6,
    titleKey: "art_6_title",
    categoryKey: "art_6_cat",
    date: "10 Mai 2026",
    readTime: "5 min",
    image: "/images/cfc.png",
    excerptKey: "art_6_excerpt"
  },
  {
    id: 7,
    titleKey: "art_7_title",
    categoryKey: "art_7_cat",
    date: "05 Mai 2026",
    readTime: "6 min",
    image: "/images/marrakech.png",
    excerptKey: "art_7_excerpt"
  },
  {
    id: 8,
    titleKey: "art_8_title",
    categoryKey: "art_8_cat",
    date: "28 Avril 2026",
    readTime: "7 min",
    image: "/images/business.png",
    excerptKey: "art_8_excerpt"
  },
  {
    id: 9,
    titleKey: "art_9_title",
    categoryKey: "art_9_cat",
    date: "22 Avril 2026",
    readTime: "7 min",
    image: "/images/casaport.png",
    excerptKey: "art_9_excerpt"
  },
  {
    id: 10,
    titleKey: "art_10_title",
    categoryKey: "art_10_cat",
    date: "15 Avril 2026",
    readTime: "6 min",
    image: "/images/developer.png",
    excerptKey: "art_10_excerpt"
  },
  {
    id: 11,
    titleKey: "art_11_title",
    categoryKey: "art_11_cat",
    date: "08 Avril 2026",
    readTime: "5 min",
    image: "/images/logistics.png",
    excerptKey: "art_11_excerpt"
  }
];

export default function BlogPage() {
  const t = useTranslations('Blog');

  return (
    <div className="bg-background min-h-screen pt-24 pb-20">
      
      {/* Header */}
      <div className="container mx-auto px-6 max-w-7xl pt-12 pb-16">
        <span className="text-primary font-medium uppercase tracking-[0.2em] text-sm mb-6 block flex items-center gap-2">
          <BookOpen className="w-4 h-4" /> {t('header_tag')}
        </span>
        <h1 className="text-4xl md:text-6xl font-light tracking-tight mb-6 text-foreground">
          {t('title1')} <br/>
          <span className="font-medium">{t('title2')}</span>
        </h1>
        <p className="text-xl text-muted-foreground font-light leading-relaxed max-w-2xl">
          {t('subtitle')}
        </p>
      </div>

      {/* Featured Article */}
      <div className="container mx-auto px-6 max-w-7xl mb-24">
        <div className="relative rounded-2xl overflow-hidden group cursor-pointer border border-border/50">
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent z-10" />
          <div className="relative h-[500px] w-full">
            <Image 
              src={ARTICLES[0].image} 
              alt={t(ARTICLES[0].titleKey)}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-700"
            />
          </div>
          <div className="absolute bottom-0 left-0 w-full p-8 md:p-12 z-20">
            <span className="inline-block bg-primary text-primary-foreground px-3 py-1 text-xs font-semibold uppercase tracking-wider mb-4 rounded-sm">
              {t('featured_tag')}
            </span>
            <h2 className="text-3xl md:text-4xl font-light text-white mb-4 max-w-3xl leading-tight group-hover:text-primary transition-colors">
              {t(ARTICLES[0].titleKey)}
            </h2>
            <p className="text-gray-300 font-light mb-6 max-w-2xl line-clamp-2">
              {t(ARTICLES[0].excerptKey)}
            </p>
            <div className="flex items-center gap-6 text-sm text-gray-400 font-light">
              <span className="flex items-center gap-2"><Calendar className="w-4 h-4" /> {ARTICLES[0].date}</span>
              <span className="flex items-center gap-2"><Clock className="w-4 h-4" /> {ARTICLES[0].readTime}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Latest Articles Grid */}
      <div className="container mx-auto px-6 max-w-7xl mb-24">
        <h3 className="text-2xl font-light mb-10 text-foreground">{t('latest_title')}</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {ARTICLES.slice(1).map((article) => (
            <div key={article.id} className="bg-card/40 backdrop-blur-sm border border-border/50 rounded-xl overflow-hidden hover:border-primary/50 transition-colors group cursor-pointer shadow-xl shadow-black/10 flex flex-col">
              <div className="relative h-48 w-full overflow-hidden">
                <Image 
                  src={article.image} 
                  alt={t(article.titleKey)}
                  fill
                  className="object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                />
              </div>
              <div className="p-6 flex flex-col flex-1">
                <span className="text-primary text-xs font-semibold uppercase tracking-wider mb-3">
                  {t(article.categoryKey)}
                </span>
                <h4 className="text-xl font-medium text-foreground mb-3 group-hover:text-primary transition-colors line-clamp-2">
                  {t(article.titleKey)}
                </h4>
                <p className="text-muted-foreground text-sm font-light mb-6 flex-1 line-clamp-3">
                  {t(article.excerptKey)}
                </p>
                <div className="flex items-center justify-between text-xs text-muted-foreground mt-auto pt-4 border-t border-border/50">
                  <span>{article.date}</span>
                  <span className="flex items-center gap-1 group-hover:text-primary transition-colors">
                    {t('read_more')} <ChevronRight className="w-3 h-3" />
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Podcast Section */}
      <div className="bg-primary/5 border-t border-b border-primary/10 py-24">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-primary font-medium uppercase tracking-[0.2em] text-sm mb-6 block flex items-center gap-2">
                <Headphones className="w-4 h-4" /> {t('podcast_tag')}
              </span>
              <h2 className="text-3xl md:text-4xl font-light tracking-tight mb-6">
                {t('podcast_title1')} <br/>
                <span className="font-medium text-foreground/80">{t('podcast_title2')}</span>
              </h2>
              <p className="text-muted-foreground font-light leading-relaxed text-lg mb-8">
                {t('podcast_desc')}
              </p>
              
              <div className="flex flex-wrap gap-4">
                <button className="flex items-center gap-3 bg-foreground text-background px-6 py-3 uppercase tracking-widest text-sm font-medium hover:bg-primary transition-colors rounded-sm">
                  <PlayCircle className="w-5 h-5" /> {t('btn_listen')}
                </button>
                <button className="flex items-center gap-3 bg-transparent border border-border/50 text-foreground px-6 py-3 uppercase tracking-widest text-sm font-medium hover:border-primary transition-colors rounded-sm">
                  {t('btn_spotify')}
                </button>
              </div>
            </div>

            <div className="bg-card/80 backdrop-blur-xl border border-border/50 p-8 rounded-2xl shadow-2xl shadow-black/30 flex gap-6 items-center">
              <div className="w-32 h-32 relative rounded-xl overflow-hidden shrink-0 shadow-lg">
                <Image src="/images/hotel.png" alt="Podcast Cover" fill className="object-cover" />
                <div className="absolute inset-0 bg-primary/20 flex items-center justify-center">
                  <PlayCircle className="w-12 h-12 text-white opacity-80" />
                </div>
              </div>
              <div>
                <span className="text-xs text-primary font-semibold tracking-wider uppercase mb-2 block">Épisode #12</span>
                <h3 className="text-lg font-medium text-foreground mb-2">L'hôtellerie de luxe face aux défis RH</h3>
                <p className="text-sm text-muted-foreground font-light line-clamp-2">Avec le Directeur Général d'un grand Palace de Marrakech. Il nous explique comment fidéliser les talents dans un secteur ultra-concurrentiel.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
