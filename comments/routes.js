var App = require("ms-core");
var comment = require("./comments-service");

var baseUrl = "/comments"
module.exports = function() {

	App.Express.get( baseUrl +"/:key", function (req, res) {
			comment.get(req.params.key)
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
