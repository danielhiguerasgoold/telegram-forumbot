// Importamos Mongoose y nos conectamos a la base de datos local

var forum = require('../models/ForumSchema');
var mongoose = require('mongoose');
// const log = require('simple-node-logger').createSimpleLogger('./../utils/logger/log.txt');

mongoose.connect(process.env.MONGO_CONNECTION_STRING);//, function(err, res) {
// 	if (err) {
// 		log.warn('Error en la conexón');
// 	}
// 	else {
// 		log.warn('Servidor arrancado en localhost:8080');
// 	}
// });

var item = new forum({
    name: "Foro tecnología",
    tags: ["tecnologia", "futuro"]
});

item.save(function(err, res) {
	if (err) {
		console.log("ha petado: "+err);
	}else{
		console.log("todo bien");
	}
});

// user.findOne({'userName': "patata", 'password': "barata"}, function(err , dato){
// 	if(err) {
// 		log.warn("Intento login incorrecto con user "+user)
// 		// return null;
// 	}

// 	log.info("Login correcto del usuario: "+dato);

// 	// mongoose.connect('mongodb://qunbo:123456@ds157740.mlab.com:57740/mydb-dev');

// 	user.update({_id: dato._id}, {$set:{token: "kdfnkfnfknfknfknkn"}}, function (err, numAffected) {

// 		if (err) {
// 			log.warn("ERROR actualizando el token de un usuario en /user/login");
// 		}else{
// 			log.info("Funciono!!:");
// 		}
// 		mongoose.connection.close(); //	cerramos la	conexión,	si	no, no	termina
// 	});
// 	// return dato;

// });

mongoose.connection.close(); //	cerramos la	conexión,	si	no, no	termina

