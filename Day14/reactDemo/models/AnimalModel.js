var mongoose = require('mongoose');

var animalSchema = new mongoose.Schema({
	name: {type: String, required: true}, 
	species: {type: String, required: false}, 
	habitat: {type: String, required: false}, 
	diet: {type: String, required: false}
});

module.exports = mongoose.model('Animal', animalSchema); //collection name for database
