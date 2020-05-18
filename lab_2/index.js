const express = require('express');
const path = require('path');

const app = express();

app.use(express.static(__dirname));
const port = process.env.PORT || 7000;

app.set('views', path.join(__dirname, '/static/views'));
app.set('view engine', 'pug');

app.get('/', function (request, response) {
    response.render('pages/index', { title: 'Home' });
  });

app.get('/customer', function (request, response) {
    response.render('pages/customer', { title: 'Customers' });
  });

app.get('/project', function (request, response) {
  response.render('pages/project', { title: 'Projects' });
  });

app.get('/perfomer', function (request, response) {
  response.render('pages/perfomer', { title: 'Perfomers' });
  });  

  app.get('/doingProject', function (request, response) {
    response.render('pages/doingProject', { title: 'Doing Projects' });
    });  
  

app.listen(port, () => console.log(`App is listening on ${port}`));