import fs from 'fs';
import path from 'path';

/**
 * Generate sitemap.xml file for the website
 * @param baseUrl - The base URL of the website
 * @param routes - Array of routes to include in the sitemap
 */
export function generateSitemap(baseUrl = 'https://toqyang.com', routes = []) {
  // Default routes based on the project structure
  const defaultRoutes = [
    '',
    'about',
    'blog',
    'contact',
    'projects',
    'system-design'
  ];

  // Combine default routes with any additional routes
  const allRoutes = [...new Set([...defaultRoutes, ...routes])];

  // Generate XML content
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${allRoutes
  .map(
    (route) => `  <url>
    <loc>${baseUrl}${route ? `/${route}` : ''}</loc>
    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>${route === '' ? '1.0' : '0.8'}</priority>
  </url>`
  )
  .join('\n')}
</urlset>`;

  // Ensure the build directory exists
  const buildDir = path.resolve('build');
  if (!fs.existsSync(buildDir)) {
    fs.mkdirSync(buildDir, { recursive: true });
  }

  // Write sitemap to file
  fs.writeFileSync(path.join(buildDir, 'sitemap.xml'), sitemap);
  console.log('Sitemap generated successfully!');
}
