const middleware = require('../middleware/auth.js');
const privadoRouter = require('express').Router();
const path = require('path');

// Define rout to HTML page
privadoRouter.get('/', (req, res) => {
  // Send HTML as answer to HTTP request
  res.sendFile('templates/welcome.html', { root: "." });
});

privadoRouter.get('/artist', middleware.verificarToken, (req, res) => {
  // Send HTML as answer to HTTP request
  res.sendFile('templates/artistPage.html', { root: "." });
});

// // Define uma rota para a página HTML
// privadoRouter.get('/styles', (req, res) => {
//   res.sendFile('/styles/style.css', { root: "." });
// });


// // Define uma rota para a página HTML
// privadoRouter.get('/images', (req, res) => {
//   res.sendFile('/assets/images/logo.svg', { root: "." });
// });

module.exports = privadoRouter;