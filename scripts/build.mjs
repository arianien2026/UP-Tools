import { cp, mkdir, rm, readFile } from 'node:fs/promises';
import { join } from 'node:path';
const root = new URL('../', import.meta.url).pathname;
const pages = ['index.html', 'support.html', 'privacy.html', 'terms.html', 'refund.html'];
for (const page of pages) {
  const html = await readFile(join(root, page), 'utf8');
  if (!html.includes('<html lang="zh-Hant">') || !html.includes('style.css')) throw new Error(`Invalid page: ${page}`);
  for (const href of [...html.matchAll(/href="([^"]+)"/g)].map(match => match[1])) {
    if (href.endsWith('.html') && !pages.includes(href)) throw new Error(`Broken local link: ${page} → ${href}`);
  }
}
await rm(join(root, 'dist'), { recursive: true, force: true });
await mkdir(join(root, 'dist'));
for (const name of [...pages, 'style.css', 'favicon.svg']) await cp(join(root, name), join(root, 'dist', name));
await cp(join(root, 'assets'), join(root, 'dist', 'assets'), { recursive: true });
console.log('Built dist/ with five checked pages and shared assets.');
