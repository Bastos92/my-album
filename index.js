const express = require('express');
const app = express();
const path = require('path');
const router = express.Router();
const bodyParser = require("body-parser");

const mongoose = require('mongoose');
const { Router } = require('express');
const { resolveMx } = require('dns');

mongoose.connect('mongodb://localhost:27017/myAlbum', {
    useNewUrlParser: true, 
    useUnifiedTopology: true
}).then(() => {
    // console.log('db connected');
}).catch(err => {
    console.log(err);
});

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/views'))

app.use(express.static(__dirname + '/public'));
//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use('/css', express.static(__dirname + '/node_modules/bootstrap/dist/css'));
app.use('/jquery', express.static(__dirname + '/node_modules/jquery/dist/'));
app.use('/js', express.static(__dirname + '/node_modules/bootstrap/dist/js'));
app.use('/popper', express.static(__dirname + '/node_modules/popper.js/dist/'));

const albumModel = new mongoose.Schema({
    fileName: String,
    title: String,
    author: String,
    location: String,
});

app.get('/', (req, res) => {
    const album = mongoose.model('Albums', albumModel);
    const collection = album.find().exec();
    collection.then(data => {
        res.render('home', { pictures: data });
    }).catch(err => {

    });
})

app.get('/home', (req, res) => {
    res.render('home');
})

app.post('/search', (req, res) => {
    res.send(req.body.);
})

app.listen(8080, () => {
    
})