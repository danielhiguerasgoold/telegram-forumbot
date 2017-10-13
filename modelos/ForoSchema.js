var mongoose = require('mongoose');
var Schema = mongoose.Schema;
//var autoIncrement = require('mongoose-auto-increment');


var foroSchema = new Schema({
	name: 			{type: String, unique: true}
	usuarioSuscrito:{type: Schema.ObjectId, ref: "usuario"}
})


//categorySchema.plugin(autoIncrement.plugin, {model: 'category'});
module.exports = mongoose.model('foro', foroSchema);