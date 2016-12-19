var express = require('express');   // load express
var http    = require('http');      // load http module
var logger  = require('morgan');    // http logger
var app     = express();            // start express
var server  = http.createServer(app);   // create http server to be used with soket.io
var io      = require('socket.io').listen(server); // load socket.io and listen to server
var path    = require('path');

// middlewares
app.use(logger('combined'))
    .use(express.static(path.join(__dirname, '/public')))
    .use(express.static(path.join(__dirname,'/bower_components')));
    
// routes
app.get('/', function (req, res) {
    res.render('index.jade');
});



// when a client is connected, log it into console
io.sockets.on('connection', function(socket) {
    console.log('client connected');
    socket.emit('message','Wilkommen !');
    
    socket.on('message', function(message)  {
        console.log(message);
    });
});

server.listen(8090);