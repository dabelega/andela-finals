//create a new express router
const express = require('express'),
	router = express.Router();

//export this router so we can require it in server.js
module.exports = router;

//define routes
router.get('/', (req, res) => {
	res.send('Home page of Andela Finals App');

});
