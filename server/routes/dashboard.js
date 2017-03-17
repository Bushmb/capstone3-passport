var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next)	{
	const test = 
	{
    "data": {
        "title": "Job",
        "company": "Company",
        "past": {
            "fulltime": [
                "Former Company"
            ],
            "intern": [
                "Women & IT",
                "Priority 5"
            ]
        },
        "hobbies": [
            "playing guitar",
            "singing karaoke",
            "playing Minecraft"
        ]
    }
}
	res.json(test);
});

module.exports = router;