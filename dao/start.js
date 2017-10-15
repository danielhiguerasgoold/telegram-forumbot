const mongoose = require('mongoose');
const User = require('../models/UserSchema');


module.exports = {
	execute: function(user) {

		mongoose.connect(process.env.MONGO_CONNECTION_STRING);
		var item = new User({
		    userName: user.username,
		    name: user.first_name +" "+ user.last_name,
		    language: user.language_code
		});

		item.save(function(err, res) {
			if (err) {
				console.log("User "+user.username+" re-used command '/start' - username is unique in a database: "+err);
			}else{
				console.log("New user "+user.username+" added in the system");
			}
		});

		mongoose.connection.close();
	}
}