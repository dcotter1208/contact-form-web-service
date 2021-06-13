const port = 8080;
const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');
const mongoPassword = '';
const mongoDatabase = '';
const connectionString = `mongodb+srv://dcotter:${mongoPassword}@cluster0.93f0r.mongodb.net/${mongoDatabase}?retryWrites=true&w=majority`;

mongoose.connect(connectionString, { useNewUrlParser: true, useUnifiedTopology: true }).then(() => {
	const app = express();
	app.use(express.json());
	app.use('/api', routes);

	app.listen(port, () => {
		console.log('Server has started!');
	});
});
