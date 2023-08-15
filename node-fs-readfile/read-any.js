import { readFile } from 'node:fs/promises';

const filename = process.argv[2];

try {
  const text = await readFile(filename, 'utf8');
  console.log(text);
} catch (err) {
  console.error('Error reading file:', err);
  process.exit(1);
}
