var mongoose = require('mongoose');
var Schema = mongoose.Schema;
//var autoIncrement = require('mongoose-auto-increment');


var postSchema = new Schema({
	titulo:			     String,
	autor: 				 String,
	visualizaciones:     {type: Number, default: 0},
	mensaje: 			 String,
	categoriaSuscrito:   {type: Schema.ObjectId, ref: "categoria"}
});


//categorySchema.plugin(autoIncrement.plugin, {model: 'category'});
module.exports = mongoose.model('post', postSchema);