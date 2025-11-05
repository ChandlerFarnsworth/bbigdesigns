const express = require('express');
const { engine } = require('express-handlebars');
const bodyParser = require('body-parser');
const path = require('path');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

// Handlebars Configuration
app.engine('hbs', engine({
  extname: '.hbs',
  defaultLayout: 'main',
  layoutsDir: path.join(__dirname, 'views/layouts'),
  partialsDir: path.join(__dirname, 'views/partials'),
  helpers: {
    eq: (a, b) => a === b,
    formatPrice: (price) => `$${price.toFixed(2)}`,
    json: (context) => JSON.stringify(context)
  }
}));

app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'views'));

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));

// Routes
app.get('/', (req, res) => {
  res.render('home', {
    title: 'Home',
    page: 'home'
  });
});

app.get('/about', (req, res) => {
  res.render('about', {
    title: 'About Us',
    page: 'about'
  });
});

app.get('/shop', (req, res) => {
  const products = require('./public/data/products.json');
  res.render('shop', {
    title: 'Shop',
    page: 'shop',
    products: products
  });
});

app.get('/gallery', (req, res) => {
  res.render('gallery', {
    title: 'Gallery',
    page: 'gallery'
  });
});

app.get('/contact', (req, res) => {
  res.render('contact', {
    title: 'Contact Us',
    page: 'contact'
  });
});

// API Routes
app.get('/api/products', (req, res) => {
  const products = require('./public/data/products.json');
  res.json(products);
});

app.post('/api/contact', (req, res) => {
  const { name, email, phone, message } = req.body;
  
  // Here you would implement email sending with nodemailer
  console.log('Contact form submission:', { name, email, phone, message });
  
  res.json({
    success: true,
    message: 'Thank you for contacting us! We will get back to you soon.'
  });
});

// 404 Handler
app.use((req, res) => {
  res.status(404).render('home', {
    title: '404 - Page Not Found',
    page: 'home',
    error: '404 - Page Not Found'
  });
});

// Start Server
app.listen(PORT, () => {
  console.log(`🚀 BBIG Designs website running on http://localhost:${PORT}`);
});