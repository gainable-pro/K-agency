"use client";

import { useState, useMemo } from 'react';
import { Calendar, Clock, ChevronRight, Search } from 'lucide-react';
import Image from 'next/image';
import { Link } from '@/i18n/routing';

interface Article {
  id: number;
  date: string;
  readTime: string;
  image: string;
  title: string;
  category: string;
  excerpt: string;
}

interface ArticlesGridProps {
  articles: Article[];
  readMoreText: string;
  searchPlaceholder: string;
  noResultsText: string;
  loadMoreText: string;
  filterAllText: string;
}

export default function ArticlesGrid({
  articles,
  readMoreText,
  searchPlaceholder,
  noResultsText,
  loadMoreText,
  filterAllText
}: ArticlesGridProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [visibleCount, setVisibleCount] = useState(6);

  // Normalize category names for translation mapping if needed,
  // or use the pre-translated category in the JSON
  const categories = useMemo(() => {
    const cats = new Set(articles.map(a => a.category));
    return ["All", ...Array.from(cats)];
  }, [articles]);

  // Filter and search articles
  const filteredArticles = useMemo(() => {
    return articles.filter(article => {
      const matchesSearch = 
        article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        article.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
      
      const matchesCategory = selectedCategory === "All" || article.category === selectedCategory;
      
      return matchesSearch && matchesCategory;
    });
  }, [articles, searchQuery, selectedCategory]);

  const displayedArticles = filteredArticles.slice(0, visibleCount);
  const hasMore = filteredArticles.length > visibleCount;

  const handleLoadMore = () => {
    setVisibleCount(prev => prev + 6);
  };

  return (
    <div className="space-y-10">
      {/* Filters & Search Bar */}
      <div className="flex flex-col md:flex-row gap-6 justify-between items-center bg-card/20 backdrop-blur-md p-6 rounded-2xl border border-border/40 shadow-lg shadow-black/5">
        
        {/* Search */}
        <div className="relative w-full md:w-96 group">
          <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground group-focus-within:text-primary transition-colors" />
          <input
            type="text"
            placeholder={searchPlaceholder}
            value={searchQuery}
            onChange={(e) => {
              setSearchQuery(e.target.value);
              setVisibleCount(6); // reset pagination on search
            }}
            className="w-full pl-11 pr-4 py-2.5 bg-background/50 border border-border focus:border-primary/60 outline-none rounded-lg text-sm text-foreground placeholder:text-muted-foreground transition-all focus:ring-1 focus:ring-primary/20"
          />
        </div>

        {/* Category Filter Tags */}
        <div className="flex flex-wrap gap-2 w-full md:w-auto justify-start md:justify-end">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => {
                setSelectedCategory(cat);
                setVisibleCount(6); // reset pagination on filter
              }}
              className={`px-4 py-2 rounded-lg text-xs font-medium uppercase tracking-wider transition-all duration-300 border ${
                selectedCategory === cat
                  ? "bg-primary text-primary-foreground border-primary shadow-lg shadow-primary/10"
                  : "bg-background/40 hover:bg-background/80 text-muted-foreground hover:text-foreground border-border/50"
              }`}
            >
              {cat === "All" ? filterAllText : cat}
            </button>
          ))}
        </div>
      </div>

      {/* Grid of Articles */}
      {filteredArticles.length === 0 ? (
        <div className="text-center py-20 bg-card/10 border border-border/30 rounded-2xl">
          <p className="text-muted-foreground text-lg font-light">{noResultsText}</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayedArticles.map((article) => (
            <Link
              key={article.id}
              href={`/blog/${article.id}`}
              className="bg-card/40 backdrop-blur-sm border border-border/50 rounded-xl overflow-hidden hover:border-primary/50 transition-all duration-500 group cursor-pointer shadow-xl shadow-black/10 flex flex-col hover:-translate-y-1"
            >
              {/* Image */}
              <div className="relative h-48 w-full overflow-hidden">
                <Image
                  src={article.image}
                  alt={article.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                />
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col flex-1">
                <span className="text-primary text-xs font-semibold uppercase tracking-wider mb-3 block">
                  {article.category}
                </span>
                <h4 className="text-xl font-medium text-foreground mb-3 group-hover:text-primary transition-colors line-clamp-2 leading-snug">
                  {article.title}
                </h4>
                <p className="text-muted-foreground text-sm font-light mb-6 flex-1 line-clamp-3 leading-relaxed">
                  {article.excerpt}
                </p>
                
                <div className="flex items-center justify-between text-xs text-muted-foreground mt-auto pt-4 border-t border-border/50">
                  <span className="flex items-center gap-1.5"><Calendar className="w-3.5 h-3.5" /> {article.date}</span>
                  <span className="flex items-center gap-1.5"><Clock className="w-3.5 h-3.5" /> {article.readTime}</span>
                </div>
                
                <div className="mt-4 pt-2 flex items-center justify-end text-xs font-semibold text-primary transition-transform duration-300 group-hover:translate-x-1">
                  <span className="flex items-center gap-1">
                    {readMoreText} <ChevronRight className="w-3 h-3" />
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      )}

      {/* Load More Button */}
      {hasMore && (
        <div className="flex justify-center pt-8">
          <button
            onClick={handleLoadMore}
            className="px-8 py-3.5 bg-foreground hover:bg-primary text-background hover:text-primary-foreground font-medium uppercase tracking-widest text-xs transition-colors rounded-sm shadow-md cursor-pointer"
          >
            {loadMoreText}
          </button>
        </div>
      )}
    </div>
  );
}
