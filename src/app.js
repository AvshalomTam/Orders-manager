const path = require('path');
const hbs = require('hbs');
var express = require('express');   

var app = express();                 
var bodyParser = require('body-parser');  
require('./db/mongoose');
const userRouter = require('./routers/user')
const orderRouter = require('./routers/order')
// Define paths for Express configuration
const publicDirectoryPath = path.join(__dirname, '../public')
const viewsPath = path.join(__dirname, '../templates/views')
const partialsPath = path.join(__dirname, '../templates/partials')

// Setup handelbars engine and views location 
app.set('view engine', 'hbs')
app.set('views', viewsPath)
hbs.registerPartials(partialsPath)

// Setup static directory to serve
app.use(express.static(publicDirectoryPath))
app.use(bodyParser.urlencoded({ extended: true })); 
app.use(bodyParser.json());
app.use(userRouter);
app.use(orderRouter);

// Routs
app.get('/', function(req, res) {
    res.render('index');  
});

app.get('/makeOrder', (req, res) => {
    res.render('makeorder');
})

app.get('/search', (req, res) => {
    res.render('search');
}); 

app.get('/newuser', (req, res) => {
    res.render('newuser');
});

app.get('/login', (req, res) => {
    res.render('login');
});

app.get('*', (req, res) => {
    res.render('404page', {
        title: '404 page',
        name: 'Avshalom Tam',
        error_msg: 'Page not found - Please go back'
    })
})

module.exports = app