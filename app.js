var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

app.use(express.static(__dirname+'/client'));
app.use(bodyParser.json());

Contact = require('./models/contact');

// Connecting to mongoose
mongoose.connect('mongodb://localhost/contactList');

app.get('/', function(req, res){
	res.send('Please use /contacts/list');
});

// Gets all contact list
app.get('/contacts/list', function(req, res){
	Contact.getContacts(function(err, contacts){
		if(err){
			throw err;
		}
		res.json(contacts);
	});
});

// Gets only one contact
app.get('/contacts/list/:_id', function(req, res){
	Contact.getContactById(req.params._id, function(err, contact){
		if(err){
			throw err;
		}
		res.json(contact);
	});
});

// Add contact
app.post('/contacts/list', function(req, res){
	var contact = req.body;
	console.log(contact);
	console.log("Node js module");
	
	Contact.addContact(contact, function(err, contact){
		if(err){
			throw err;
		}
		res.json(contact);
	});
	
});

// Update contact
app.put('/contacts/list/:_id', function(req, res){
	var id = req.params._id;
	var contact = req.body;
	console.log(contact);
	Contact.updateContact(id, contact, {}, function(err, contact){
		if(err){
			throw err;
		}
		res.json(contact);
	});
});

// Delete contact
app.delete('/contacts/list/:_id', function(req, res){
	var id = req.params._id;
	Contact.deleteContact(id, function(err, contact){
		if(err){
			throw err;
		}
		res.json(contact);
	});
});

app.listen(3000);
console.log('Running on port 3000...');