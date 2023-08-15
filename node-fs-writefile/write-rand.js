import { writeFile } from 'node:fs/promises';

async function writeMyFile() {
  try {
    const randomNumber = String(Math.random()) + '\n';
    await writeFile('random.txt', randomNumber, 'utf-8');
    console.log('File written successfully!');
  } catch (error) {
    console.log('An error occured', error.message);
  }
}

writeMyFile();
