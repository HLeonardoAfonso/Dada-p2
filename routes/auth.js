const authRouter = require('express').Router();
const controller = require('../controllers/auth');

authRouter.get('/', (req, res) => {
    res.sendFile('../templates/register.html', { root: "." });
  });
authRouter.post('/signin', controller.signin);
authRouter.post('/signup', controller.signup);
authRouter.post('/letoken', controller.readToken);

module.exports = authRouter;