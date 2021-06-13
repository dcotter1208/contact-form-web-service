const express = require('express');
const Contact = require('./models/Contact');
const router = express.Router();

router.post('/new-contact', async (req, res) => {
	const newContact = await Contact({
		firstName: req.body.firstName,
		lastName: req.body.lastName,
		phoneNumber: req.body.phoneNumber,
		email: req.body.email
	});
	try {
		await newContact.save();
		res.send(posts);
	} catch {
		res.status(500);
		res.send({ error: 'Failed to save new contact.' });
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
