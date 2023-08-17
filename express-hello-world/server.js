import express from 'express';

const app = express();

app.use((req, res) => {
  console.log('Req Method: ', req.method);
  res.send('Send Test String, but newer!');
});

app.listen(8080, () => {
  console.log('Express server listening on port 8080');
});
