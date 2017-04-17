//grab all dependencies
const express = require('express'),
	app = express(),
	port = process.env.PORT || 8080;

//configure our app

//set the routes
app.get('/', (req, res) => {
	res.send('Home page of Andela Finals App');

});

//test our server
app.listen(port, () => {
	console.log(`App listening on http://localhost:${port}`);
});