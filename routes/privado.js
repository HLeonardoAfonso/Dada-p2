const privadoRouter = require('express').Router();


// Define uma rota para a página HTML
privadoRouter.get('/', (req, res) => {
    // Envie o arquivo HTML como resposta para a solicitação HTTP
    res.sendFile('/templates/backOffice/artistPage.html', { root: "." });
  });

// Define uma rota para a página HTML
privadoRouter.get('/styles', (req, res) => {
  // Envie o arquivo HTML como resposta para a solicitação HTTP
  res.sendFile('/styles/style.css', { root: "." });
});


// Define uma rota para a página HTML
privadoRouter.get('/images', (req, res) => {
  // Envie o arquivo HTML como resposta para a solicitação HTTP
  res.sendFile('/assets/images/logo.svg', { root: "." });
});

module.exports = privadoRouter;