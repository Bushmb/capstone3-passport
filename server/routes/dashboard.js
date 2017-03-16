var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next)	{
	const test = [
	  {
	    "_id": "58cb15cc3bae880c2262c41b",
	    "title": "FISHLAND",
	    "description": "Velit ea duis laborum nulla mollit fugiat. Cupidatat fugiat est qui proident. Aute mollit aute Lorem Lorem.\r\n",
	    "picture": "http://placehold.it/32x32"
	  }
	]
	res.json(test);
});

module.exports = router;