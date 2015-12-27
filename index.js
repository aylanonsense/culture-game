//set up a server
var express = require('express');
var app = express();

//serve web stuff
app.use(express.static(__dirname + '/public'));
app.get('/jquery.js', function(req, res) {
	res.sendFile(__dirname + '/node_modules/jquery/dist/jquery.js');
});
app.get('/require.js', function(req, res) {
	res.sendFile(__dirname + '/node_modules/requirejs-plugins/lib/require.js');
});
app.get('/require/plugin/text.js', function(req, res) {
	res.sendFile(__dirname + '/node_modules/requirejs-plugins/lib/text.js');
});
app.use('/require/plugin', express.static(__dirname + '/node_modules/requirejs-plugins/src'));
app.use('/javascripts', express.static(__dirname + '/javascripts'));

//run server
app.listen(process.env.PORT || 3000);