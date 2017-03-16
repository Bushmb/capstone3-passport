var async = require('async');
var request = require('request');
var unfluff = require('unfluff');

const scrapedData = require('../models/scrapedData');

///////////////////////////////////////////////////////////////
// Grab data from HackerNews API
///////////////////////////////////////////////////////////////

function fetchHackerNewsAPI() {

	scrapedData.remove({}, function(err,removed) {
	});

	const topics = ['javascript'];

	topics.forEach(function(topic){
		const url = `http://hn.algolia.com/api/v1/search_by_date?query=${topic}&hitsPerPage=10&tags=story`
		const results = [];
		request(url, function(error, response, body) {
			const data = JSON.parse(body);
			const items = data.hits;
			let story = {};

			items.forEach(item => {
				const pageUrl = item.url;
				const date = item['created_at'].match(/(\d{4})-(\d{2})-(\d{2})/g);
				const hn_title = item.title;
				const points = item.points;

				if(pageUrl !== null){
					if(pageUrl.indexOf("https://github.com", 0) === -1 ) {
						story = {
							date, hn_title, points, pageUrl, topic
						}
						results.push(story)
					}
				}
			});

			fetchHTML(results);
		});
	});

};

///////////////////////////////////////////////////////////////
// Scrape data from individual Urls
///////////////////////////////////////////////////////////////

function fetchHTML(results) {
	results.forEach(function(result){

		// Call to each URL pulled from HackerNews
		request(result.pageUrl, function (error, res, body) {
			if(error) {
				console.log("error", error);
			}
			// Pull out content from each link
			const unfluffed = unfluff(body)

			// Grabbing the original URL for a poss linkback
			const orig_url = result.pageUrl;

			// What topic was being searched
			const topic = result.topic;
		
			// Current Points on Hacker News
			const points = result.points;
		
			// Grab the date the article was posted on HackerNews
			const date = dateFormat(result.date);
		
			// Grab story title if it has one.
			let title = unfluffed.title;
			title = (title && title !== "400 Bad Request") ? title : false;
			title = title ? title : result.hn_title;
		
			// Grab story description if there is one
			const desc = unfluffed.description;
		
			// Grab image
			const img = unfluffed.image;
		
			// Create unique story id from stripped and shortened url
			const story_id = result.pageUrl.replace(/[^a-z0-9]+/ig, "").substring(5, 40);
			console.log("ID", story_id);

			// Clean up the url for front end design
			const display_url = result.pageUrl.split('/')[2].replace(/www./i, '')
	
			// Get a word count of the story's description
		   	const desc_words = desc ? desc.split(' ').length : false
		   
		   	// Make sure the description is long enough for front end design
		   	const desc_check = desc_words > 7 ? desc_words : false
		   
		   	// Grab first 200 chars of text from article
		   	const text = unfluffed.text
		   			   ? unfluffed.text.substring(0, 200).replace(/\n\n/g, ' ') 
		   			   : false

		   	// Word Length of text from sraped page
		   	const text_words = unfluffed.text ? unfluffed.text.split(' ').length: false;
		   
		   	// How long will it take a user to read this story?
	   	    const mins = Math.ceil(unfluffed.text.split(' ').length / 250)

	   	    // Make sure the story is long enough to be worth reading
	   	    const mins_check = mins > 1 ? mins + " Min Read" : false
	   	   
	   	    const story = {
	   	    	story_id, orig_url, topic, date, title, desc, img,
	   	    	display_url, text, mins_check, points, text_words
	   	    }

	   	    if(Object.keys(story).every(key => story[key])) {
   	    	    
	   	    	scrapedData.count({story_id: story.story_id}, function (err, count){ 
	   	    	    if(count>0){	
	   	    	    	console.log("+++++++ Already in DB +++++++");
	   	    	    	
	   	    	    } else {
	    	    		scrapedData.create(story, function (err, story) {
	    	    		if (err) return handleError(err);
	    	    		console.log("+++NOT IN DB++++SAVING NOW++++");
	    	    	    })
	   	    	    }
	   	    	}); 
	   	    		
	   	    }
		
		});
	});
	scrapedData.count({}, function(err, count){
	    console.log( "TOTAL Number of docs: ", count );
	});
};


///////////////////////////////////////////////////////////////
// Modify date format to show MM/DD/YYYY
///////////////////////////////////////////////////////////////

function dateFormat(inputDate) {
    var date = new Date(inputDate);
        var day = date.getDate().toString();
        var month = (date.getMonth() + 1).toString();
        // Months use 0 index.
        return (month[1] ? month : '0' + month[0]) + '/' +
           (day[1] ? day : '0' + day[0]) + '/' + 
           date.getFullYear();
};


module.exports = fetchHackerNewsAPI;