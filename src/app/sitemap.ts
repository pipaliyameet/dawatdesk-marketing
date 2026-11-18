import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://dawatdesk.vercel.app';
  const lastModified = new Date();

  const routes = [
    '',
    '/features',
    '/features/restaurant-pos',
    '/features/kitchen-management',
    '/features/billing',
    '/features/table-management',
    '/features/menu-management',
    '/features/staff-management',
    '/features/reports',
    '/features/multi-outlet',
    '/how-it-works',
    '/solutions',
    '/solutions/restaurants',
    '/solutions/cafes',
    '/solutions/quick-service',
    '/roles',
    '/pricing',
    '/about',
    '/contact',
    '/demo',
    '/privacy',
    '/terms',
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified,
    changeFrequency: route === '' ? 'daily' : 'weekly',
    priority: route === '' ? 1.0 : route.startsWith('/features') || route === '/demo' ? 0.8 : 0.6,
  }));
}
