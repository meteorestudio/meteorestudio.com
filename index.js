var express = require('express');
var app = express();

app.use(express.static('public'));

app.set('view engine', 'ejs');

var portfolio = [
  {
    title: 'ANTONIO´S KITCHEN',
    services: ['Imagen Corporativa', 'Diseño gráfico', 'Web', 'Fotografía Comercial', 'Diseño Editorial'], 
    image: 'portfolio_item_1.jpg',
    importance: 1
  },
  {
    title: 'DISEÑO ACTUAL',
    services: ['Diseño gráfico', 'Web', 'Fotografía Comercial'], 
    image: 'portfolio_item_2.jpg',
    importance: 0
  },
  {
    title: 'MAGNET BOUND PRESS',
    services: ['Diseño gráfico', 'Web', 'E-Commerce'], 
    image: 'portfolio_item_3.jpg',
    importance: 0
  },
  {
    title: 'REAL LIFE WELLNESS',
    services: ['Imagen Corporativa', 'Diseño gráfico', 'Web'], 
    image: 'portfolio_item_4.jpg',
    importance: 1
  },
  {
    title: 'SHOE LIMITLESS',
    services: ['Diseño gráfico', 'Web', 'E-Commerce'], 
    image: 'portfolio_item_5.jpg',
    importance: 0
  },
  {
    title: 'VITI PREMIUMS',
    services: ['Diseño gráfico', 'Web', 'E-Commerce'], 
    image: 'portfolio_item_6.jpg',
    importance: 0
  },
  {
    title: 'WAYFARER',
    services: ['Imagen Corporativa', 'Diseño gráfico', 'Web', 'Diseño Editorial'], 
    image: 'portfolio_item_7.jpg',
    importance: 0
  },
  {
    title: 'WIND NUTRITION',
    services: ['Diseño gráfico', 'Web'], 
    image: 'portfolio_item_8.jpg',
    importance: 0
  },
];

app.get('/', function(req, res) {
    var services = [
      {name: 'imagen corporativa', image: 'service_1.svg'},
      {name: 'diseno grafico', image: 'service_2.svg'},
      {name: 'web', image: 'service_3.svg'},
      {name: 'e-commerce', image: 'service_4.svg'},
      {name: 'diseno editorial', image: 'service_5.svg'},
      {name: 'fotografia comercial', image: 'service_6.svg'}
    ];
    
    res.render('pages/index', { 
      services: services, 
      portfolio: portfolio 
    });
});

app.get('/portfolio', function(req, res) {
  res.render('pages/portfolio', {
    portfolio: portfolio
  });
});

app.get('/about', function(req, res) {  
    res.render('pages/about');
});

app.get('/case_study', function(req, res) {  
  res.render('pages/case_study');
});

app.get('/services', function(req, res) {  
  res.render('pages/services');
});

app.get('/contact', function(req, res) {  
  res.render('pages/contact');
});

app.listen(8080);