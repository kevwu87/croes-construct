import type { MetadataRoute } from 'next'
import { services } from '@/lib/content'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.croesconstruct.be'

  return [
    { url: baseUrl, lastModified: new Date(), changeFrequency: 'monthly', priority: 1 },
    ...services.map(({ slug }) => ({ url: `${baseUrl}/diensten/${slug}`, lastModified: new Date(), changeFrequency: 'monthly' as const, priority: 0.8 })),
    { url: `${baseUrl}/privacy`, lastModified: new Date(), changeFrequency: 'yearly', priority: 0.3 },
    { url: `${baseUrl}/voorwaarden`, lastModified: new Date(), changeFrequency: 'yearly', priority: 0.3 },
  ]
}
