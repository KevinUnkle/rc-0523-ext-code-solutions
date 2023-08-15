import { readFile } from 'node:fs/promises';

try {
  const dijkstra = await readFile('dijkstra.txt', 'utf8');
  console.log(dijkstra);
} catch (error) {
  console.log('fail to read dijkstra content: ', error);
}
