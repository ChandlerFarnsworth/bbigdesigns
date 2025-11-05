# BBIG Designs Website

A professional, multi-page website for BBIG Designs - Colorado's premium handcrafted belt buckle manufacturer.

## Features

- Multi-page responsive design
- Bootstrap 5 framework
- Handlebars templating
- AJAX functionality
- Font Awesome icons
- Stripe payment integration ready
- Contact form
- Product gallery
- Docker support for local development

## Tech Stack

- HTML5/CSS3
- Bootstrap 5.3
- JavaScript (ES6+)
- Handlebars.js
- Font Awesome 6
- Node.js + Express
- Docker

## Project Structure

```
bbig-designs/
├── public/
│   ├── css/
│   │   └── style.css
│   ├── js/
│   │   ├── main.js
│   │   └── gallery.js
│   ├── images/
│   │   └── (logo and product images)
│   └── data/
│       └── products.json
├── views/
│   ├── layouts/
│   │   └── main.hbs
│   ├── partials/
│   │   ├── header.hbs
│   │   └── footer.hbs
│   ├── home.hbs
│   ├── about.hbs
│   ├── shop.hbs
│   ├── gallery.hbs
│   └── contact.hbs
├── server.js
├── package.json
├── Dockerfile
└── docker-compose.yml
```

## Getting Started

### Local Development (Docker)

1. Build and run the container:
```bash
docker-compose up --build
```

2. Access the website at: `http://localhost:3000`

### Local Development (Node.js)

1. Install dependencies:
```bash
npm install
```

2. Start the server:
```bash
npm start
```

3. Access the website at: `http://localhost:3000`

## Color Palette

- Primary: Lime Green (#a3ca55)
- Dark Gray: #3e3f3b
- Medium Gray: #7b7e79
- Black: #000000

## Contact Information

- Garrett Farnsworth: 303-888-5067
- Greg Gibb: 720-514-1610
- Mail: PO Box 631546, Littleton, CO 80163

## Future Enhancements

- Stripe payment integration
- Shopping cart functionality
- Admin panel for product management
- Customer accounts