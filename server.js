// server.js

// BASE SETUP
// =============================================================================

// call the packages we need
var express    = require('express');        // call express
var app        = express();                 // define our app using express
var bodyParser = require('body-parser');
var fs = require('fs');
var path = require('path');

app.use(function(req, res, next) 
{ 
res.header('Access-Control-Allow-Origin', "*"); 
res.header('Access-Control-Allow-Methods','GET,PUT,POST,DELETE'); 
res.header('Access-Control-Allow-Headers', 'Content-Type'); next();
})


// configure app to use bodyParser()
// this will let us get the data from a POST
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var port = process.env.PORT || 8080;        // set our port

// ROUTES FOR OUR API
// =============================================================================
var router = express.Router();              // get an instance of the express Router

// test route to make sure everything is working (accessed at GET http://localhost:8080/api)
router.get('/api', function(req, res) {
    res.json(
	
	[
	
            {"Country":"China","Population":"1,367,485,388"},
            {"Country":"India","Population":"1,251,695,584"},
			{"Country":"USA","Population":"321,368,864"},
            {"Country":"Indonesia","Population":"255,993,674"},
			
			{"Country":"Brazil","Population":"204,259,812"},
            {"Country":"Pakistan","Population":"199,085,847"},
			{"Country":"Nigeria","Population":"181,562,056"},
            {"Country":"Bangladesh","Population":"168,957,745"},
			
			{"Country":"Russia","Population":"142,423,773"},
            {"Country":"Japan","Population":"126,919,659"},
    
	]
	
	);   
});

router.get('/chart', function(req, res) {
    res.json(
	
	[
	
            {"Country":"China","Population":1367485388},
            {"Country":"India","Population":1251695584},
			{"Country":"USA","Population":321368864},
            {"Country":"Indonesia","Population":255993674},
			
			{"Country":"Brazil","Population":204259812},
            {"Country":"Pakistan","Population":199085847},
			{"Country":"Nigeria","Population":181562056},
            {"Country":"Bangladesh","Population":168957745},
			
			{"Country":"Russia","Population":142423773},
            {"Country":"Japan","Population":126919659},
    
	]
	
	);   
});

router.get('/', function(req, res) {
	res.sendfile(path.join(__dirname + '/index.html'));
	
});

router.get('/map', function(req, res) {
    res.json(
	{"location":
	[
		{"lat":34.5553 ,"lng":69.2075},
        {"lat":-36.8485 ,"lng":174.7633},
		{"lat":35.6895 ,"lng":139.6917},
		
		{"lat":-12.6895 ,"lng":19.6917},
		{"lat":43.6895 ,"lng":-41.6917},
		{"lat":-65.6895 ,"lng":-119.6917},
		
		{"lat":12.6895 ,"lng":-19.6917},
		{"lat":-43.6895 ,"lng":41.6917},
		{"lat":65.6895 ,"lng":119.6917},
		
		{"lat":-20.0000 ,"lng":-20.0000},
		
		
	]
	}
	);   
});



router.get('/html', function(req, res) {
     
	var st='<button onclick="getdataanddisplay()">Send an HTTP GET request to get JSON data and display in table and list form</button><br><button onclick="getchartdata()">Send an HTTP GET request to get JSON chart data</button><br><button onclick="displaychart()">Display chart</button><br><button onclick="getmapdata()">Send an HTTP GET request to get lattitude and longitude</button><br><button onclick="displaymap()">Display map</button><br>';
	res.send(st);
});

// more routes for our API will happen here

// REGISTER OUR ROUTES -------------------------------
// all of our routes will be prefixed with /api


app.use('/', router);

// START THE SERVER
// =============================================================================
app.listen(port);
console.log('Magic happens on port ' + port);
