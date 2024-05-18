const router = require('express').Router();
const artRouter = require('./listings');
const authRouter = require('./auth');



router.use('/listings', artRouter);
router.use('/auth', authRouter);



module.exports = router;