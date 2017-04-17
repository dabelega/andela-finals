//grab all dependencies
const express = require('express'),
	app = express(),
	port = process.env.PORT || 8080,
	expressLayouts = require('express-ejs-layouts');

//configure our app
//tell express where to look for static assets
app.use(express.static(__dirname + '/public'));

//set ejs as templating
app.set('view engine', 'ejs');
app.use(expressLayouts);

//set the routes
app.use(require('./app/routes'));

//test our server
app.listen(port, () => {
	console.log(`App listening on http://localhost:${port}`);
});