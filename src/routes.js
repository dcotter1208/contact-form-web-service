const express = require('express');
const Contact = require('./models/Contact');
const router = express.Router();

router.get('/welcome', async (_, res) => {
	res.send({ message: 'app is running...' });
});

router.post('/new-contact', async (req, res) => {
	const newContact = await Contact({
		firstName: req.body.firstName,
		lastName: req.body.lastName,
		phoneNumber: req.body.phoneNumber,
		email: req.body.email
	});
	try {
		response = await newContact.save();
		res.send(response);
	} catch (error) {
		res.status(500);
		res.send({ error: `Failed to save new contact. Reason: ${error}` });
	}
});

router.get('/contacts', async (_, res) => {
	try {
		const contacts = await Contact.find();
		res.send(contacts);
	} catch {
		res.status(500);
		res.send({ error: 'Failed to retrieve contacts' });
	}
});

module.exports = router;
