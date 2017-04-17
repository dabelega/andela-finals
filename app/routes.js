//create a new express router
const express = require('express'),
	router = express.Router(),
	mainController = require('./controllers/main.controller');

//export this router so we can require it in server.js
module.exports = router;

//define routes
router.get('/', mainController.showHome);