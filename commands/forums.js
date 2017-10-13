const mongoose = require('mongoose');
const Forum = require('../models/ForumSchema');


module.exports = {
	execute: function(callback) {

		mongoose.connect('mongodb://test:1234@ds059712.mlab.com:59712/dev-forobot');
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