const privadoRouter = require('express').Router();

// Define rout to HTML page
privadoRouter.get('/', (req, res) => {
    // Send HTML as answer to HTTP request
    res.sendFile('templates/backOffice/artistPage.html', { root: "." });
  });


module.exports = privadoRouter;