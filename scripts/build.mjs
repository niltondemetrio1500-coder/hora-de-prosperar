import { cp, mkdir, readdir, rm } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = fileURLToPath(new URL('../', import.meta.url));
const output = path.join(root, 'dist');
const pagePaths = [
  'index.html',
  'comecar',
  'frase',
  'jornada',
  'preparando',
  'ultima-etapa',
  'politica-de-privacidade',
  'termos-de-uso',
  'src',
];

await rm(output, { recursive: true, force: true });
await mkdir(output, { recursive: true });

for (const relativePath of pagePaths) {
  await cp(path.join(root, relativePath), path.join(output, relativePath), {
    recursive: true,
  });
}

const publicDirectory = path.join(root, 'public');
for (const entry of await readdir(publicDirectory, { withFileTypes: true })) {
  await cp(
    path.join(publicDirectory, entry.name),
    path.join(output, entry.name),
    { recursive: true, force: true },
  );
}

console.log(`Build estático gerado em ${output}`);
