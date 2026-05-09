import fs from 'node:fs';
import path from 'node:path';

const imageExtensions = new Set(['.jpg', '.jpeg', '.png', '.webp', '.avif']);
const publicDirectory = path.join(process.cwd(), 'public');

export type LocalImage = {
  src: string;
  alt: string;
};

function toTitleCase(fileName: string) {
  return fileName
    .replace(/\.[^.]+$/, '')
    .replace(/[-_]+/g, ' ')
    .replace(/\b\w/g, (letter) => letter.toUpperCase());
}

export function getImagesFromPublicFolder(folder: string): LocalImage[] {
  const normalizedFolder = folder.replace(/^\//, '');
  const absoluteFolder = path.join(publicDirectory, normalizedFolder);

  if (!fs.existsSync(absoluteFolder)) {
    return [];
  }

  return fs
    .readdirSync(absoluteFolder, { withFileTypes: true })
    .filter((entry) => entry.isFile() && imageExtensions.has(path.extname(entry.name).toLowerCase()))
    .sort((a, b) => a.name.localeCompare(b.name, undefined, { numeric: true }))
    .map((entry) => ({
      src: `/${normalizedFolder}/${entry.name}`,
      alt: `Rufes Fashions ${toTitleCase(entry.name)}`,
    }));
}
