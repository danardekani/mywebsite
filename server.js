let express = require('express');
let app = express();

app.set('view engine', 'pug');

app.use(express.static(__dirname + '/public'));

app.get('/', (req, res) => {
  res.render('index', {
    title: 'Homepage'
  });
});

let server = app.listen(7000, () => {
  console.log(`Running port ${server.address().port}`);
});