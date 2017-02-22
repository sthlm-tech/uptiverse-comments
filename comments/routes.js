var App = require("ms-core");
var comment = require("./comments-service");

var baseUrl = "/comments"
module.exports = function() {

	App.Express.get( baseUrl, function (req, res) {
			comment.get()
			.then(function(response) {
				res.send(response);
			});
	});

	App.Express.post( baseUrl + "/create", function (req, res) {
			comment.create(req.body.comment)
			.then(function(response) {
				res.send(response);
			});
	});

};
