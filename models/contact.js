var mongoose = require('mongoose');

// Creation of Schema for Contacts
var contactsSchema = mongoose.Schema({
	firstname : {
		type : String,
		require : true
	},
	lastname : {
		type : String,
		require : true
	},
	middleinitial : {
		type : String,
		require : true
	},
	phoneNumber : {
		type : Number,
		require : true
	},
	cellphoneNumber : {
		type : Number,
		require : true
	},
	email : {
		type : String,
		require : true
	}
});

var Contact = module.exports = mongoose.model('Contact', contactsSchema);

// Get Contacts
module.exports.getContacts = function(callback, limit){
	Contact.find(callback).limit(limit);
}

// Get Contact
module.exports.getContactById = function(id, callback){
	Contact.findById(id, callback);
}

// Add Contact
module.exports.addContact = function(contact, callback){
	Contact.create(contact, callback);
}

// Update Contact
module.exports.updateContact = function(id, contact, options, callback){
	var query = {_id: id};
	var update = {
		firstname : contact.firstname,
		lastname : contact.lastname,
		middleinitial : contact.middleinitial,
		phoneNumber : contact.phoneNumber,
		cellphoneNumber : contact.cellphoneNumber,
		email : contact.email
	};
	Contact.findOneAndUpdate(query, update, options, callback);
}

// Delete Contact
module.exports.deleteContact = function(id, callback){
	var query = {_id: id};
	Contact.remove(query, callback);
}