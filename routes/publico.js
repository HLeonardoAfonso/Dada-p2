const publicoRouter = require('express').Router();

// Define uma rota para a página HTML
publicoRouter.get('/', (req, res) => {
  // Envie o arquivo HTML como resposta para a solicitação HTTP
  res.sendFile('templates/frontEnd/index.html', { root: "." });
});

// Define uma rota para a css
publicoRouter.get('/styles', (req, res) => {
    // Envie o arquivo HTML como resposta para a solicitação HTTP
    res.sendFile('/styles/style.css', { root: "." });
  });

// Define uma rota para a js
publicoRouter.get('/scripts', (req, res) => {
  // Envie o arquivo HTML como resposta para a solicitação HTTP
  res.sendFile('scripts/homepage.js', { root: "." });
});


module.exports = publicoRouter;