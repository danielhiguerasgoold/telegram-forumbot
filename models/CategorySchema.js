var mongoose = require('mongoose');
var Schema = mongoose.Schema;
//var autoIncrement = require('mongoose-auto-increment');


var categorySchema = new Schema({
	name:				{type: String, unique: true},
	forumSubscribed:   	{type: Schema.ObjectId, ref: "forum"}
})


//categorySchema.plugin(autoIncrement.plugin, {model: 'category'});
module.exports = mongoose.model('category', categorySchema);