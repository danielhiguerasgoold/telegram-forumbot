var mongoose = require('mongoose');
var Schema = mongoose.Schema;
//var autoIncrement = require('mongoose-auto-increment');


var categoriaSchema = new Schema({
	nombre:			{type: String, unique: true},
	foroSuscrito:   {type: Schema.ObjectId, ref: "foro"}
})


//categorySchema.plugin(autoIncrement.plugin, {model: 'category'});
module.exports = mongoose.model('categoria', categoriaSchema);