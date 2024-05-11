const artRouter = require('express').Router();
const controller = require('../controllers/listings');


artRouter.get('/testCon', controller.testConnection);
//CRUD for the listings
artRouter.get('/', controller.getAll);
artRouter.get('/:id', controller.getById);
artRouter.post('/create', controller.create);
artRouter.put('/update', controller.update);
artRouter.delete('/delete/:id', controller.delete);



module.exports = artRouter;