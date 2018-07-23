const express = require('express');
const hbs = require('hbs');
const fs = require('fs');

const port = process.env.PORT || 3000;


var app = express();

//register partials template
hbs.registerPartials(__dirname + '/views/partials');
//set view engine
app.set('view engine', 'hbs');
//static html files
app.use(express.static(__dirname + '/public'));
//register helper (function)--currentYEar
hbs.registerHelper('getCurrentYear', () => {
  return new Date().getFullYear()
});

app.get('/', (req, res) => {
  // // res.send('<h1>Hello Express!</h1>');
  // res.send({
  //   name: 'Chih Chao',
  //   likes: [
  //     'Riding',
  //     'Biking',
  //     'Baseball'
  //   ]
  // });
  res.render('home.hbs', {
    pageTitle: 'About Page',
    userName: 'Chih Chao'
  });
});

app.get('/about', (req, res) => {
  // res.send('About Page');
  res.render('about.hbs', {
    pageTitle: 'About Page'
  });
});

// /bad - send back json with errorMessage
app.get('/bad', (req, res) => {
  res.send({
    errorcode: 404,
    errerMessage:'Unable to find this page.'
  });
});

app.listen(port, () => {
  console.log(`Server is up no port ${port}!`);
});
