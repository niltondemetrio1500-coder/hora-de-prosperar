import { createReadStream, existsSync, statSync } from 'node:fs';
import { createServer } from 'node:http';
import { extname, resolve, sep } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = resolve(fileURLToPath(new URL('.', import.meta.url)));
const port = Number(process.env.PORT || 3000);
const routeFiles = new Map([
  ['/', 'index.html'],
  ['/comecar', 'comecar/index.html'],
  ['/frase', 'frase/index.html'],
  ['/jornada', 'jornada/index.html'],
  ['/preparando', 'preparando/index.html'],
  ['/ultima-etapa', 'ultima-etapa/index.html'],
  ['/politica-de-privacidade', 'politica-de-privacidade/index.html'],
  ['/termos-de-uso', 'termos-de-uso/index.html'],
]);
const mimeTypes = new Map([
  ['.css', 'text/css; charset=utf-8'],
  ['.html', 'text/html; charset=utf-8'],
  ['.jpeg', 'image/jpeg'],
  ['.jpg', 'image/jpeg'],
  ['.js', 'text/javascript; charset=utf-8'],
  ['.json', 'application/json; charset=utf-8'],
  ['.svg', 'image/svg+xml'],
  ['.webp', 'image/webp'],
]);

const server = createServer((request, response) => {
  let pathname;
  try {
    pathname = new URL(request.url || '/', 'http://localhost').pathname;
  } catch {
    response.writeHead(400).end('Bad request');
    return;
  }

  const normalizedPath = pathname.replace(/\/$/, '') || '/';
  const pagePath = routeFiles.get(normalizedPath);
  let relativePath;
  try {
    relativePath = pagePath || decodeURIComponent(pathname).replace(/^\/+/, '');
  } catch {
    response.writeHead(400).end('Bad request');
    return;
  }
  if (!pagePath && (relativePath.startsWith('assets/') || relativePath === 'manus-routes.json')) {
    relativePath = `public/${relativePath}`;
  }

  const target = resolve(root, relativePath);
  if (!target.startsWith(`${root}${sep}`)) {
    response.writeHead(403).end('Forbidden');
    return;
  }
  if (!existsSync(target) || !statSync(target).isFile()) {
    response.writeHead(404, { 'content-type': 'text/plain; charset=utf-8' }).end('Not found');
    return;
  }

  response.writeHead(200, {
    'content-type': mimeTypes.get(extname(target)) || 'application/octet-stream',
    'cache-control': 'no-cache',
    'x-content-type-options': 'nosniff',
  });
  createReadStream(target).pipe(response);
});

server.listen(port, '0.0.0.0', () => {
  console.log(`Hora de Prosperar disponível na porta ${port}`);
});
