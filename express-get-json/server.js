import express from 'express';

const grades = {
  12: {
    id: 12,
    name: 'Tim Berners-Lee',
    course: 'HTML',
    score: 95,
  },
  47: {
    id: 47,
    name: 'Brendan Eich',
    course: 'JavaScript',
    score: 100,
  },
  273: {
    id: 273,
    name: 'Forbes Lindsay',
    course: 'JavaScript',
    score: 92,
  },
};

const app = express();

app.get('/api/grades', (req, res) => {
  const gradeArray = [];
  for (const grade in grades) {
    gradeArray.push(grades[grade]);
  }
  res.json(gradeArray);
});

const port = 8080;
app.listen(port, () => {
  console.log(`Express server listening on port ${port}`);
});
