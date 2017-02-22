var Comments = require("./Comments");
var when = require('when');
function CommentsService() {
	var self = this;

	self.get = function(key){
		var deferred = when.defer();

		Comments.find({"key":key})
		.sort({date: 'descending'})
		.exec(function(err, comments) {
			deferred.resolve(comments);
		});

		return deferred.promise;
	};

	self.create = function(in_data){
		var deferred = when.defer();
		var comment = new Comments();

		for (var property in in_data) {
			if (in_data.hasOwnProperty(property)) {
					comment[property] = in_data[property];
			}
		}

		comment.save(function(err, created){
			deferred.resolve(created);
		});

		return deferred.promise;
	}



}
module.exports = new CommentsService();
