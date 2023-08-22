import express from 'express';

const app = express();

app.use(express.json);

let nextId = 1;
const grades = {};

app.get('/api/grades', (req, res) => {
  const gradeArray = [];
  for (const grade in grades) {
    gradeArray.push(grades[grade]);
  }
  res.json(gradeArray);
});

app.post('/api/grades', (req, res) => {
  if (req.body) {
    const body = req.body;
    body.id = nextId;
    nextId++;
    grades[body.id] = body;
    res.status(201).send(body);
  } else {
    console.log('Unable to retrieve json information');
    res.sendStatus(404);
  }
});

app.listen(8080, () => {
  console.log(`Express server listening on port ${8080}`);
});
