var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
const scrapedData = require('../models/scrapedData');

router.get('/', function(req, res, next)	{
    let data = [];
	scrapedData.find({}, function(err, scrapeddatas) {
        if(err) {
           console.log('Error!!');
        } else {
            console.log(scrapeddatas);
            data = scrapeddatas;
            res.json(data);
        }
    });

});

module.exports = router;