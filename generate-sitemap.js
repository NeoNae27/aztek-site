// generate-sitemap.js
import { SitemapStream, streamToPromise } from 'sitemap';
import { createWriteStream } from 'fs';

const baseUrl = 'https://aztek.com';

const pages = [
  '/',
  '/about',
  '/services',
  '/projects',
  '/contacts'
];

(async () => {
  const sitemap = new SitemapStream({ hostname: baseUrl });
  const writeStream = createWriteStream('./public/sitemap.xml');
  sitemap.pipe(writeStream);

  pages.forEach(url => sitemap.write({ url }));

  sitemap.end();
  await streamToPromise(sitemap);
  console.log('✅ sitemap.xml generated in /public');
})();
