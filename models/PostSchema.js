var mongoose = require('mongoose');
var Schema = mongoose.Schema;
//var autoIncrement = require('mongoose-auto-increment');


var postSchema = new Schema({
	titule:			     	String,
	author: 				String,
	views:     				{type: Number, default: 0},
	message: 			 	String,
	categorySubscribed:   	{type: Schema.ObjectId, ref: "category"}
});


//categorySchema.plugin(autoIncrement.plugin, {model: 'category'});
module.exports = mongoose.model('post', postSchema);