import { Calendar, Clock, Headphones, PlayCircle, BookOpen } from 'lucide-react';
import Image from 'next/image';
import { getLocale, getTranslations } from 'next-intl/server';
import ArticlesGrid from '@/components/blog/ArticlesGrid';
import articlesData from '@/data/articles.json';

type Article = {
  id: number;
  date: string;
  readTime: string;
  image: string;
  title: string;
  category: string;
  excerpt: string;
};

export default async function BlogPage() {
  const locale = await getLocale();
  const t = await getTranslations('Blog');

  // Format and localize articles based on active locale
  const formattedArticles: Article[] = articlesData.map((art: any) => {
    const langKey = (locale === 'en' || locale === 'it') ? locale : 'fr';
    const localized = art[langKey] || art['fr'];
    return {
      id: art.id,
      date: art.date,
      readTime: art.readTime,
      image: art.image,
      title: localized.title,
      category: localized.category,
      excerpt: localized.excerpt
    };
  });

  const featuredArticle = formattedArticles[0];
  const gridArticles = formattedArticles.slice(1);

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
      {featuredArticle && (
        <div className="container mx-auto px-6 max-w-7xl mb-24">
          <div className="relative rounded-2xl overflow-hidden group cursor-pointer border border-border/50">
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent z-10" />
            <div className="relative h-[500px] w-full">
              <Image 
                src={featuredArticle.image} 
                alt={featuredArticle.title}
                fill
                priority
                className="object-cover group-hover:scale-105 transition-transform duration-700"
              />
            </div>
            <div className="absolute bottom-0 left-0 w-full p-8 md:p-12 z-20">
              <span className="inline-block bg-primary text-primary-foreground px-3 py-1 text-xs font-semibold uppercase tracking-wider mb-4 rounded-sm">
                {t('featured_tag')}
              </span>
              <span className="ml-4 inline-block bg-card/65 backdrop-blur-md text-foreground border border-border/30 px-3 py-1 text-xs font-medium uppercase tracking-wider mb-4 rounded-sm">
                {featuredArticle.category}
              </span>
              <h2 className="text-3xl md:text-4xl font-light text-white mb-4 max-w-3xl leading-tight group-hover:text-primary transition-colors">
                {featuredArticle.title}
              </h2>
              <p className="text-gray-300 font-light mb-6 max-w-2xl line-clamp-2">
                {featuredArticle.excerpt}
              </p>
              <div className="flex items-center gap-6 text-sm text-gray-400 font-light">
                <span className="flex items-center gap-2"><Calendar className="w-4 h-4" /> {featuredArticle.date}</span>
                <span className="flex items-center gap-2"><Clock className="w-4 h-4" /> {featuredArticle.readTime}</span>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Articles Grid (Search, Filter, Load More Pagination) */}
      <div className="container mx-auto px-6 max-w-7xl mb-24">
        <h3 className="text-2xl font-light mb-10 text-foreground">{t('latest_title')}</h3>
        <ArticlesGrid 
          articles={gridArticles}
          readMoreText={t('read_more')}
          searchPlaceholder={t('search_placeholder')}
          noResultsText={t('no_results')}
          loadMoreText={t('load_more')}
          filterAllText={t('filter_all')}
        />
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
                <button className="flex items-center gap-3 bg-foreground text-background px-6 py-3 uppercase tracking-widest text-sm font-medium hover:bg-primary transition-colors rounded-sm cursor-pointer">
                  <PlayCircle className="w-5 h-5" /> {t('btn_listen')}
                </button>
                <button className="flex items-center gap-3 bg-transparent border border-border/50 text-foreground px-6 py-3 uppercase tracking-widest text-sm font-medium hover:border-primary transition-colors rounded-sm cursor-pointer">
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
