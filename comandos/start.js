const mongoose = require('mongoose');
const Usuario = require('../modelos/UsuarioSchema');


module.exports = {
	ejecuta: function(usuario) {

		mongoose.connect('mongodb://test:1234@ds059712.mlab.com:59712/dev-forobot');
		var item = new Usuario({
		    nombreUsuario: usuario.username,
		    nombre: usuario.first_name +" "+ usuario.last_name,
		    lenguaje: usuario.language_code
		});

		item.save(function(err, res) {
			if (err) {
				console.log("ha petado añadiendo un nuevo usuario: "+err);
			}else{
				console.log("Usuario "+usuario.username+" añadido al sistema");
			}
		});

		mongoose.connection.close();

		return item.nombre;
	}
}