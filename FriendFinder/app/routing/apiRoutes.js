var friendsData = require('../data/friends.js');

module.exports = function (app) {

	app.get('/api/friends', function (req, res) {
		res.json(friendsData);
	});

	app.post('/api/friends', function (req, res) {

		req.body.scores = JSON.parse(req.body.scores);

		console.log(req.body);

		var resultsArray = [];

		var result = 0;

		for(var i = 0; i < friendsData.length; i++) {

			var tempArray = [];

			for(var j = 0; j < friendsData[i].scores.length; j++) {

				tempArray.push(Math.abs(friendsData[i].scores[j] - req.body.scores[j]));
				
			};

			console.log("temp array: " + tempArray);

			for(var k = 0; k < tempArray.length; k++) {

				result += tempArray[k];

			};

			resultsArray.push(result);
			result = 0;

		};

		console.log("results array: " + resultsArray);

		var min = Math.min(...resultsArray);
		console.log("min result: " +min);

		var indexOfMin = resultsArray.indexOf(min)
		console.log("index of min result: " + indexOfMin);

		resultsArray = [];

		friendsData.push(req.body);

		console.log("match: " + JSON.stringify(friendsData[indexOfMin]));

		res.json(friendsData[indexOfMin]);

	});

};