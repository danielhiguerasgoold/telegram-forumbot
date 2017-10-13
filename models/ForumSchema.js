var mongoose = require('mongoose');
var Schema = mongoose.Schema;
//var autoIncrement = require('mongoose-auto-increment');


var forumSchema = new Schema({
	name: 			{type: String, unique: true},
	tags: 			[],
	userSubscribed: {type: Schema.ObjectId, ref: "user"}
})


//categorySchema.plugin(autoIncrement.plugin, {model: 'category'});
module.exports = mongoose.model('forum', forumSchema);