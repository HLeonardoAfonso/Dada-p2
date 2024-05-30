const authRouter = require('express').Router();
const controller = require('../controllers/auth');

authRouter.post('/signin', controller.signin);
authRouter.post('/signup', controller.signup);
authRouter.post('/letoken', controller.readToken);

authRouter.get('/:x', controller.userData);

module.exports = authRouter;