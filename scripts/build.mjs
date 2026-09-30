// Build script: copies src/ -> dist/, vendors the SheetJS library, adds cache-busting hashes, verifies paths.
// No npm dependencies. Requires Node 18+.
import { cpSync, rmSync, mkdirSync, readFileSync, writeFileSync, existsSync } from 'node:fs';
import { createHash } from 'node:crypto';
import { join, dirname } from 'node:path';

const SRC = 'src', OUT = 'dist';
const VENDOR = {
  'xlsx.full.min.js': 'https://cdnjs.cloudflare.com/ajax/libs/xlsx/0.18.5/xlsx.full.min.js',
  'jszip.min.js': 'https://cdnjs.cloudflare.com/ajax/libs/jszip/3.10.1/jszip.min.js',
};
const fail = (m) => { console.error('BUILD ERROR: ' + m); process.exit(1); };

// 1. Clean + copy
rmSync(OUT, { recursive: true, force: true });
mkdirSync(OUT, { recursive: true });
cpSync(SRC, OUT, { recursive: true });
writeFileSync(join(OUT, '.nojekyll'), '');

// 2. Vendor third-party libraries (Excel upload + Word export) so the site does not depend on a CDN at runtime
mkdirSync(join(OUT, 'assets/vendor'), { recursive: true });
const vendored = new Set();
for (const [name, url] of Object.entries(VENDOR)) {
  for (let i = 1; i <= 3 && !vendored.has(name); i++) {
    try {
      const r = await fetch(url);
      if (!r.ok) throw new Error('HTTP ' + r.status);
      const t = await r.text();
      if (t.length < 20000) throw new Error('unexpected file size');
      writeFileSync(join(OUT, 'assets/vendor', name), t);
      vendored.add(name);
    } catch (e) { console.warn(`Vendor ${name} attempt ${i} failed: ${e.message}`); }
  }
  if (!vendored.has(name)) console.warn(`WARNING: ${name} not vendored. The page will fall back to the CDN at runtime.`);
}

// 3. Cache-busting hashes
const hash = (f) => createHash('sha1').update(readFileSync(join(OUT, f))).digest('hex').slice(0, 10);
const indexPath = join(OUT, 'index.html');
let html = readFileSync(indexPath, 'utf8');
html = html.replace(/(assets\/[^"'?]+\.(?:css|js))\?v=__HASH__/g, (_, p) => `${p}?v=${hash(p)}`);
writeFileSync(indexPath, html);

// 4. Verify: relative paths only, all local files exist
const refs = [...html.matchAll(/(?:src|href)="([^"]+)"/g)].map((m) => m[1]);
for (const ref of refs) {
  if (/^(https?:|data:|mailto:|#)/.test(ref)) continue;
  if (ref.startsWith('/')) fail(`absolute path "${ref}" will break under a GitHub Pages subfolder`);
  const file = ref.split('?')[0];
  if (!existsSync(join(OUT, file))) {
    if (file.includes('vendor/')) continue; // optional: falls back to CDN
    fail(`missing file referenced in index.html: ${file}`);
  }
}
for (const f of ['assets/js/app.js', 'assets/css/style.css']) {
  if (/(?:src|href|url)\(?\s*["']?\/(?!\/)assets\//.test(readFileSync(join(OUT, f), 'utf8'))) fail(`absolute /assets path in ${f}`);
}
console.log(`Build OK -> ${OUT}/ (${refs.length} references checked, vendored: ${[...vendored].join(', ') || 'none'})`);
