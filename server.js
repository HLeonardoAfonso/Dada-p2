require('dotenv').config();

const bodyParser = require('body-parser');
const cors = require('cors');
const express = require('express');

const homepageRouter = require('./routes');
const router = require('./routes/api');
const privadoRouter = require('./routes/privado');

const app = express();
app.use(bodyParser.json());
app.use(cors());

app.use(express.static('templates/index.html'));

app.use(express.static('styles')); //inport styles
app.use(express.static('assets')); //inport assets
app.use(express.static('files/uploads/')); //inport uploaded fotos 

app.use('/', homepageRouter);   //homepage
app.use('/api/', router);       //editing listings api
app.use('/bo/', privadoRouter); //artist private page

const port = process.env.SERVER_PORT || 8080;
app.listen(port, () => {
    console.log('Express server listening on port', port)
});
