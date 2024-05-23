require('dotenv').config();

const bodyParser = require('body-parser');
const cors = require('cors');
const express = require('express');


const multer = require('multer');
// const path = require('path');



const homepageRouter = require('./routes');
const router = require('./routes/api');
const privateRouter = require('./routes/private');
const uploadRouter = require('./routes/upload');

const app = express();
app.use(bodyParser.json());
app.use(cors());

app.use(express.static('templates/index.html'));

app.use(express.static('styles')); //inport styles
app.use(express.static('assets')); //inport assets
app.use(express.static('files/uploads/')); //inport uploaded fotos 
app.use(express.static('scripts')); //inport assets

app.use('/', homepageRouter);   //homepage
app.use('/api/', router);       //editing listings api
app.use('/artist/', privateRouter);  //artist private page
app.post('/upload', uploadRouter );



const port = process.env.SERVER_PORT || 8080;
app.listen(port, () => {
    console.log('Express server listening on port', port)
});
