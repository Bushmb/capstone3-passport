var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// create User Schema
var scrapedData = new Schema({
	story_id: String,
   	orig_url: String,
  	topic: String,
  	date: String,
  	title: String,
  	desc: String,
  	img: String,
  	display_url: String,
  	text: String,
  	mins_check: String,
  	points: Number,
  	text_words: Number
});


module.exports = mongoose.model('scrapedData', scrapedData);