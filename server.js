let express = require('express');
let people = require('./myProfile.json');

let app = express();

app.set('view engine', 'pug');

app.use(express.static(__dirname + '/public'));

app.get('/', (req, res) => {
  res.render('index', {
    title: 'Homepage',
    myProfile: 'myProfile.profile'
  });
});

let server = app.listen(7000, () => {
  console.log(`Running port ${server.address().port}`);
});