const mongoose = require('mongoose');
const Forum = require('../models/ForumSchema');


module.exports = {
	execute: function(callback) {

		mongoose.connect(process.env.MONGO_CONNECTION_STRING);
		let resultado = {};

		Forum.find({}, function(error, data) {
			if (error) {
				console.log("Error en BD /forums");
			}else {
				// console.log("ok");
				mongoose.connection.close();
				// console.log(data);
				callback(true, data);
			}
		});

		
	}
}