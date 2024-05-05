const homepageRouter = require('express').Router();


// Rout to HTML page
homepageRouter.get('/', (req, res) => {
  // Send HTML as answer to HTTP request
  res.sendFile('templates/index.html', { root: "." });
});
  
// Rout to CSS
homepageRouter.get('/styles', (req, res) => {
  res.sendFile('/styles/style.css', { root: "." });
});

// Rout to JS script
homepageRouter.get('/scripts', (req, res) => {
  res.sendFile('scripts/homepage.js', { root: "." });
});

module.exports = homepageRouter;