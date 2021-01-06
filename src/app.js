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
// const { checkValidMsg, orderMessage } = require('./utils/fillArray');
const User = require('./models/user');
// const Order = require('./models/order');
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

app.get('/stam', async (req, res) => {
    try {
        const user = await User.findOne({ username: 'Avshalom' });

        if (!user) {
            return res.status(404).send()
        }
        res.send(user._id)

        const user2 = await User.findOne({ _id: '5ff441364650cf226ccd5dba' });

        if (!user2) {
            console.log('didnt worked')
        } else {
            console.log(user2.username)
        }
    } catch (e) {
        console.log('Problem with getting data: ' + e);
    }
})

app.get('*', (req, res) => {
    res.render('404page', {
        title: '404 page',
        name: 'Avshalom Tam',
        error_msg: 'Page not found - Please go back'
    })
})

module.exports = app

