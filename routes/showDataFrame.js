
//
// module for setting Wind Speed of the wind fan
//


var express = require('express');
var router = express.Router();

dataFrameContent = 'controlGraph';

// middleware specific to this route, logs timestamps
router.use(function timeLog(req, res, next){
	console.log('showDataFrame Time: ', Date.now());
	next();
})

// define the home page route
router.get('/', function(req, res){
console.log('showDataFrame get');
console.log('showDataFrame get: dataFrameContent: '+ req.param('dataFrameContent', null));
dataFrameContent = req.param('dataFrameContent', null);

// res.redirect('index');
})

router.post('/', function(req, res, next){

console.log('showDataFrame post');


})

router.put('/', function(req, res, next){
console.log('showDataFrame put');

	var spinnerValue = req.body.value;
	res.seeValue = req.body.value;
	res.redirect('index');
})

router.get('/about', function(req, res){
	res.send('wind speed About page');
})

module.exports = router;

	