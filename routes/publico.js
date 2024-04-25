const publicoRouter = require('express').Router();


// Define uma rota para a página HTML
publicoRouter.get('/', (req, res) => {
    // Envie o arquivo HTML como resposta para a solicitação HTTP
    res.sendFile('/Users/ninatchernega/Desktop/Dada-p2/templates/frontEnd/index.html');
  });


module.exports = publicoRouter;