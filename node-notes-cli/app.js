import { readFile, writeFile } from 'node:fs/promises';

const [, , operation, argv3, argv4] = process.argv;
app(operation, argv3, argv4);

async function app(operation, idOrContent, content) {
  try {
    switch (operation) {
      case 'read':
        await read();
        break;
      case 'create':
        await create(idOrContent);
        break;
      case 'delete':
        await deleteId(idOrContent);
        break;
      case 'update':
        await update(idOrContent, content);
        break;
      default:
        throw Error(
          'Invalid operation, only read/update/create/delete are accepted'
        );
    }
  } catch (error) {
    console.log('Error handling file: ', error);
  }
}

async function read() {
  const data = await readData();
  const displayData = [];
  for (const key in data.notes) {
    displayData.push(`${key}: ${data.notes[key]}`);
  }
  console.log(displayData.join('\n'));
}

async function create(text) {
  const data = await readData();
  data.notes[data.nextId] = text;
  data.nextId++;
  await writeData(data);
}

async function deleteId(id) {
  const data = await readData();
  if (data.notes[id]) {
    delete data.notes[id];
    console.log(`ID ${id} deleted!`);
  } else {
    throw Error(`ID ${id} does not exist`);
  }
  await writeData(data);
}

async function update(id, text) {
  const data = await readData();
  if (data.notes[id]) {
    data.notes[id] = text;
    console.log(`ID ${id} updated!`);
  } else {
    throw Error(`ID ${id} does not exist`);
  }
  await writeData(data);
}

async function readData() {
  return JSON.parse(await readFile('data.json'));
}

async function writeData(data) {
  const jsonData = JSON.stringify(data, null, 2);
  await writeFile('data.json', jsonData);
}
