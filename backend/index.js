/**
 * Main application file
 */

'use strict';

var bodyParser = require('body-parser'),
    cors = require('cors'),
    errorHandler = require('errorhandler'),
    express = require('express'),
    methodOverride = require('method-override'),
    mongoose = require('mongoose');


// Connect to database
mongoose.connect('mongodb://localhost/jobdream');


// Configure express
var app = express();
app.use(cors());
app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(bodyParser.json());
app.use(methodOverride());
app.use(errorHandler()); // Error handler - has to be last


// Routing
app.use('/annonces', require('./annonce.js'));


// Start server
var server = app.listen(9000, function() {

    var host = server.address().address
    var port = server.address().port

    console.log('App listening at http://%s:%s', host, port)
});
