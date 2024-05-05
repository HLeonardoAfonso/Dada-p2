const router = require('express').Router();
const artRouter = require('./listings');

router.use('/listings', artRouter);

module.exports = router;