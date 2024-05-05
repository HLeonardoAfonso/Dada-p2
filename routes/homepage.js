const homepageRouter = require('express').Router();


// Define rout to HTML page
homepageRouter.get('/', (req, res) => {
    // Send HTML as answer to HTTP request
    res.sendFile('templates/index.html', { root: "." });
  });


module.exports = homepageRouter;