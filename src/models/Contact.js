const mongoose = require('mongoose');

const schema = mongoose.Schema({
	firstName: String,
	lastName: String,
	phoneNumber: String,
	email: String
});

module.exports = mongoose.model('Contact', schema);
