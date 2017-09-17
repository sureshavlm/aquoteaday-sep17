var express = require('express');

var app = express();


/*
	REST end point
	http://localhost:8080/
*/
app.get('/', function(req, res) {
	res.sendFile(__dirname + '/index.html');
});

var port = process.env.PORT || 8080;

app.listen(port, function() {
	console.log("Application run on port 8080");
});
