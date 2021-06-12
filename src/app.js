//Load HTTP module
const port = 3000;
const express = require('express');
const app = express();
app.use(express.json());
const MongoClient = require('mongodb').MongoClient;
const mongoPassword = '';
const mongoDatabase = '';
const connectionString = `mongodb+srv://dcotter:${mongoPassword}@cluster0.93f0r.mongodb.net/${mongoDatabase}?retryWrites=true&w=majority`;

MongoClient.connect(connectionString, { useUnifiedTopology: true }, (err, client) => {
	if (err) return console.error(err);

	const contactFormDataBase = client.db('contact-form');
	const contactsCollection = contactFormDataBase.collection('contacts');

	app.post('/new-contact', (req, res) => {
		contactsCollection
			.insertOne(req.body)
			.then(result => {
				res.send(req.body);
			})
			.catch(err => {
				res.send(err);
			});
	});
});

app.listen(port, () => {
	console.log('=======================================');
	console.log('listening on 3000');
	console.log('=======================================');
});
