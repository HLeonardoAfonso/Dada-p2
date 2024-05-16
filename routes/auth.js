const authRouter = require('express').Router();
const controller = require('../controllers/auth');

authRouter.get('/', (req, res) => {
    res.sendFile('templates/sign-in-up.html', { root: "." });
  });
authRouter.post('/signin', controller.signin);
authRouter.post('/signup', controller.signup);

module.exports = authRouter;