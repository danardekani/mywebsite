const express = require('express');
const app = express();

app.set('view engine', 'pug');

app.get('/', (req, res) => {
  res.render('index', {
    name: 'Daniel Ardekani'
  });
});

const server = app.listen(7000, () => {
  console.log(`Running port ${server.address().port}`);
});