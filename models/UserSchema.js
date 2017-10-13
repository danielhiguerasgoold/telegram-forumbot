var mongoose = require('mongoose');
var Schema = mongoose.Schema;
//var autoIncrement = require('mongoose-auto-increment');


var userSchema = new Schema({
	userName: 	{type: String, unique: true},
	name: 		String,
	language: 	String
});


//categorySchema.plugin(autoIncrement.plugin, {model: 'category'});
module.exports = mongoose.model('user', userSchema);