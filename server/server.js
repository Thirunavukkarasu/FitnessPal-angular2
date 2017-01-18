var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var mongoose = require('mongoose');
var cors     = require('cors');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var Results = require('./models/results');
var Runners = require('./models/runners');
var app = express();
var fs = require('fs');

mongoose.connect('mongodb://localhost/test');
// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, '../client')));
app.use(cors());

app.get('/gallery', function (req, res, next) {
    res.json([{

    },{

    }]);
});

app.get('/about', function (req, res, next){
    res.json([{

    },{

    }]);
});
app.get('/results', function (req, res, next) {
    res.json([{

    },{

    }]);    
});

app.get('/api/events', function (req, res, next) {
    res.json([{
        id          : 1,
        eventName   : 'Siruseri 6K',
        eventHeldOn : '20-06-2017' 
    },{
        id          : 2,
        eventName   : 'Chennai Marathon',
        eventHeldOn : '20-06-2018' 
    }]);    
});

app.get('/quotes', function (req, res, next) {
    res.json([{

    },{

    }]);
});

app.listen(3001, function () {
    console.log("Server started at 3001 port!");
});