const privadoRouter = require('express').Router();


// Define uma rota para a página HTML
privadoRouter.get('/gerirCarros', (req, res) => {
    // Envie o arquivo HTML como resposta para a solicitação HTTP
    res.sendFile('templates/backOffice/artistPage.html', { root: "." });
  });


module.exports = privadoRouter;