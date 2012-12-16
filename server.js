var http = require('http'),
	static = require('node-static'),
	director = require('director'),
	app = http.createServer(handler),
	port = 8080;

var files = new static.Server('./app');

var router = new director.http.Router({
	'/hello': {
		get: helloWorld
	}
});

function handler(request, response) {
	/*router.dispatch(request, response, function(error) {
		if (error) {
			response.writeHead(404);
			response.end('404 Not Found');
		}
	});*/
	request.addListener('end', function() {
		files.serve(request, response);
	});
}

function helloWorld() {
	console.log('hello world');
}

// start app on specified port
app.listen(port);
console.log('Your server goes on localhost:' + port);