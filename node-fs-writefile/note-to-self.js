import { writeFile } from 'node:fs/promises';

const noteToSelf = process.argv[2];

async function writeMyNote(text) {
  try {
    await writeFile('note.txt', text + '\n');
    console.log('File written successfully!');
  } catch (error) {
    console.log('An error occured', error.message);
  }
}

writeMyNote(noteToSelf);
