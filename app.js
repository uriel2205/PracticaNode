const express = require('express')
const  hbs = require('hbs');
const app = express()
const port = 8080;


// Handlebars
app.set('view engine', 'hbs')
hbs.registerPartials( __dirname + '/views/partials', function (err) {});



// Servir contenido estatico
app.use( express.static('public'));

app.get('/', function (req, res) {
   res.render('home', {
        nombre: 'Uriel Vargas',
        titulo: 'Ingeneria del Sistema'
   });
  });

app.get('/generic', function (req, res) {
    res.render('generic',{
      name: 'Kinston',
      title: 'Kinstons gonna be one of the best'
    });
  });

  app.get('/elements', function (req, res) {
    res.render('elements',{
      name: 'Renekton',
      title: 'Id love to play Renekton again'
    });
  });



  app.get('*', function (req, res) {
    res.sendFile( __dirname + '/public/404.html');
  })

app.listen(port)