const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send("welcome to my website!");
});

const server = app.listen(7000, () => {
  console.log(`Running port ${server.address().port}`);
});