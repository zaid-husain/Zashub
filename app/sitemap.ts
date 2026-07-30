import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_APP_URL || 'https://zashub.vercel.app';

  const routes = [
    '',
    '/about',
    '/login',
    '/register',
    '/forgot-password',
    '/communities',
    '/events',
    '/feed',
    '/search',
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === '' ? 'daily' : 'weekly',
    priority: route === '' ? 1.0 : route === '/about' ? 0.9 : 0.8,
  }));
}
