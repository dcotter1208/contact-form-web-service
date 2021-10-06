const port = process.env.PORT || 8080;
const express = require('express');
const mongoose = require('mongoose');
var cors = require('cors');
const routes = require('./routes');
const mongoPassword = process.env.MONGO_PASSWORD;
const mongoDatabase = 'contacts';
const connectionString = `mongodb+srv://dcotter:${mongoPassword}@cluster0.93f0r.mongodb.net/${mongoDatabase}?retryWrites=true&w=majority`;

mongoose.connect(connectionString, { useNewUrlParser: true, useUnifiedTopology: true }).then(() => {
	const app = express();
	app.use(cors());
	app.use(express.json());
	app.use('/api', routes);

	app.listen(port, () => {
		console.log('Server has started!');
	});
});
