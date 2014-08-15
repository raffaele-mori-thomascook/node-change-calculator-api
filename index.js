var changeCalc = require('node-change-calculator');
var port = 3000;
var http = require('http');
var qs = require('querystring');
var url = require('url');
var fs = require('fs');


http.createServer(function (req, res) {
	switch (req.url) {
		case '/':
			var index = fs.readFileSync(__dirname+'/index.html');
			res.writeHead(200, {'Content-Type': 'text/html'});
			res.end(index);
		break;

		default:
			var query = qs.parse(url.parse(req.url).query);
			var result = changeCalc.getChange(query.paid, query.cost);

			res.writeHead(200, {'Content-Type': 'text/json'});
		    // res.end('The change is: '+changeCalc.getChange(query.paid, query.cost).join(','));
		    res.end('{"result":['+result.join(',')+']}')
	}
	
}).listen(port);
console.log('visit: localhost:'+port);