import express from 'express';
import { readFile, writeFile } from 'node:fs/promises';

const app = express();
app.use(express.json());

app.get('/api/notes', async (req, res) => {
  const array = [];
  const data = await readJSONData();
  const notesList = data.notes;
  for (const entries in notesList) {
    array.push(notesList[entries]);
  }
  res.json(array);
});

app.get('/api/notes/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const data = await readJSONData();
    const notesList = data.notes;
    if (id <= 0) {
      res.json({ error: 'Please enter a positive number.' });
    } else {
      res.json(notesList[id]);
    }
  } catch (error) {
    console.error(error);
    res.status(404).json({ error: `Entry Id does not exist.` });
  }
});

app.post('/api/notes', async (req, res) => {
  try {
    const newEntry = req.body;
    const data = await readJSONData();
    if (!newEntry.content) {
      res.status(400).json({ error: 'Content is a required field.' });
    } else {
      await createNotes(data, newEntry);
      res.json(newEntry);
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'An unexpected error has occurred.' });
  }
});

app.delete('/api/notes/:id', async (req, res) => {
  const { id } = req.params;
  const data = await readJSONData();
  await deleteNotes(data, id, res);
});

async function readJSONData() {
  const contents = await readFile('data.json');
  const data = JSON.parse(contents);
  return data;
}

async function createNotes(data, newEntry) {
  newEntry.id = data.nextId++;
  data.notes[newEntry.id] = newEntry;
  data = JSON.stringify(data, null, 2);
  await writeFile('data.json', data);
}

async function deleteNotes(data, id, res) {
  if (isNaN(id) || id <= 0) {
    res.status(400).json({ error: 'Please enter a positive number.' });
    return;
  } else if (!data.notes[id]) {
    res.status(404).json({ error: `Entry Id: ${id} does not exist.` });
    return;
  } else {
    delete data.notes[id];
  }

  try {
    data = JSON.stringify(data, null, 2);
    await writeFile('data.json', data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'An unexpected error has occured.' });
  }

  // Note deleted successfully
  res.sendStatus(204);
}

app.put('/api/notes/:id', async (req, res) => {
  const { id } = req.params;
  const content = req.body;
  content.id = parseInt(id);

  let data = await readJSONData();
  if (id <= 0 || !content) {
    res
      .status(400)
      .json({ error: 'Either enter a positive number or content is missing.' });
  } else if (!data.notes[id]) {
    res.status(404).json({ error: `Entry Id: ${id} does not exist.` });
  } else {
    data.notes[id] = content;
  }
  try {
    data = JSON.stringify(data, null, 2);
    await writeFile('data.json', data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'An unexpected error has occured.' });
  }
  // Edit successful
  res.sendStatus(200);
});

app.listen(8080, () => {
  console.log('Listening for port 8080.');
});
