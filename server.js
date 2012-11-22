var cms = require('./index.js');

var server = cms({
	
});

// Configuration common to all environments
server.set('port', 80);

server.use(require('./apps/my_app')({
	name : "another unicorn"
}));

// Configuration development environment
if ('development' == server.get('env')) {
	server.set('port', 3000);
}

server.run();

console.log("node-cms is listening on port " + server.get('port'));