var mongoose = require('mongoose');

var commentsSchema = mongoose.Schema({
    key: String,
    date: String,
    user: String,
    text: String
});

var Comments = mongoose.model('Comments', commentsSchema);

module.exports = Comments;
