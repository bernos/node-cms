var express = require('express');


module.exports = function(options) {
	options = options || {};

	// Create our cms server
	var server = express();

	// Add all our built-in cms middleware first

	// Runs the server. Before calling server.listen we add our error handling middleware
	// This ensures that the error handling middleware runs after any custom application
	// middleware
	server.run = function() {

		this.use(logErrors);
		this.use(notFound);

		this.listen(this.get('port'));
	};

	

	function logErrors(err, req, res, next) {
		console.error(err.stack);
		next(err);
	}

	function notFound(req, res, next) {
		res.send(404, 'Sorry, cannot find that!');
	}

	server.get('/hello.txt', function(req, res){
	  var body = 'Hello World';
	  res.setHeader('Content-Type', 'text/plain');
	  res.setHeader('Content-Length', body.length);
	  res.end(body);
	});

	return server;
};


