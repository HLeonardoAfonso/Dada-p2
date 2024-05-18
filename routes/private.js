const middleware = require('../middleware/auth.js');
const privateRouter = require('express').Router();
const path = require('path');

// Define rout to HTML page
privateRouter.get('/', (req, res) => {
  // Send HTML as answer to HTTP request
  res.sendFile('templates/welcome.html', { root: "." });
});

privateRouter.get('/artist', middleware.verificarToken, (req, res) => {
  // Send HTML as answer to HTTP request
  res.sendFile('templates/artistPage.html', { root: "." });
});

// enter in personal page id
// artRouter.get('/:id', controller.getById);

module.exports = privateRouter;