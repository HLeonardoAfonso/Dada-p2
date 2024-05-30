const middleware = require('../middleware/auth.js');
const privateRouter = require('express').Router();
const path = require('path');


privateRouter.get('/3', (req, res) => {
  res.sendFile('templates/artistPage.html', { root: "." });
});


// Define rout to HTML page
privateRouter.get('/', (req, res) => {
  res.sendFile('templates/welcome.html', { root: "." });
});

// artRouter.get('/:id', controller.getById);

privateRouter.get('/artist', middleware.verificarToken, (req, res) => {
  res.sendFile('templates/artistPage.html', { root: "." });
});



// enter in personal page id
// privateRouter.get('/:id', controller.getById);


module.exports = privateRouter;