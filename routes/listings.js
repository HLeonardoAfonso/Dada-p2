const artRouter = require('express').Router();
const controller = require('../controllers/listings');
const middleware = require('../middleware/auth.js');

artRouter.use(middleware.verificarToken);

//CRUD for the listings
artRouter.get('/', controller.getAll);
artRouter.get('/:id', controller.getById);
artRouter.get('/artist/:x', controller.getByArtistId);
artRouter.post('/create', controller.create);
artRouter.put('/update', controller.update);
artRouter.delete('/delete/:id', controller.delete);


module.exports = artRouter;