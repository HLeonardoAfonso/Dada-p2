const homepageRouter = require('express').Router();


homepageRouter.get('/', (req, res) => {
  res.sendFile('templates/index.html', { root: "." });
});

homepageRouter.get('/register', (req, res) => {
  res.sendFile('templates/register.html', { root: "." });
});

homepageRouter.get('/search', (req, res) => {
  res.sendFile('templates/search.html', { root: "." });
});


module.exports = homepageRouter;