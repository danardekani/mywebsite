let express = require('express');
let people = require('./people.json');
let app = express();

app.set('view engine', 'pug');
app.use(express.static(__dirname + '/public'));

//homepage route//
app.get('/', (req, res) => {
  res.render('index', {
    title: 'Homepage',
    people: people.profiles
  });
});

//profile route//
app.get('/profile', (req, res) => {
  let person = people.profiles.find(p => p.id === req.query.id);
  res.render('profile', {
    title: `About ${person.firstname} ${person.lastname}`,
    person,
  });
});

//server message in iterm//
let server = app.listen(7000, () => {
  console.log(`Running port ${server.address().port}`);
});