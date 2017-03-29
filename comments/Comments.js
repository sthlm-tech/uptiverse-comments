var mongoose = require('mongoose');

var commentsSchema = mongoose.Schema({
    key: String,
    date: Date,
    user: Object,
    text: String
});

var Comments = mongoose.model('Comments', commentsSchema);

module.exports = Comments;
