import { MetadataRoute } from 'next';
import { generateAllCombinations } from '@/data/seo-data';


const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000';

export default function sitemap(): MetadataRoute.Sitemap {
  
  // 1. Static Pages
  const staticRoutes = [
    '',
    '/recrutement',
    '/chasse-de-tetes',
    '/implantations',
    '/offres-emploi',
    '/contact',
    '/deposer-cv',
  ];

  const staticSitemapEntries = staticRoutes.flatMap((route) => {
    // Only indexing the french ('fr') locale for now to simplify, or map over locales
    return [
      {
        url: `${baseUrl}/fr${route}`,
        lastModified: new Date(),
        changeFrequency: 'monthly' as const,
        priority: route === '' ? 1 : 0.8,
      }
    ];
  });

  // 2. Programmatic SEO Pages (1000 pages)
  const combinations = generateAllCombinations();
  
  const dynamicSitemapEntries = combinations.map((combination) => ({
    url: `${baseUrl}/fr/expertises/${combination.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }));

  return [...staticSitemapEntries, ...dynamicSitemapEntries];
}
