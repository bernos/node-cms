var express = require('express');

module.exports = function(options) {
	var app = express();

	app.get('/info.txt', function(req, res){
	  var body = 'Hello ' + (options.name || "world") ;
	  res.setHeader('Content-Type', 'text/plain');
	  res.setHeader('Content-Length', body.length);
	  res.end(body);
	});

	return app;
}