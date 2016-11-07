var app = require('express')();
var http = require('http').Server(app);
var express = require('express');
var path = require("path");
var PORT = process.env.PORT || 8080;
var io = require('socket.io')(http);



app.use(express.static(__dirname + '/dev'));




http.listen(PORT, function(){
 console.log('listening on *:8080');
});