var mongoose = require('mongoose');
var Schema = mongoose.Schema;
//var autoIncrement = require('mongoose-auto-increment');


var usuarioSchema = new Schema({
	nombreUsuario: 	{type: String, unique: true},
	nombre: 		String,
	lenguaje: 		String
});


//categorySchema.plugin(autoIncrement.plugin, {model: 'category'});
module.exports = mongoose.model('usuario', usuarioSchema);