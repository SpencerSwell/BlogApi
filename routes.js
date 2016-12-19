'use-strict';
const bodyParser = require('body-parser');
const express = require('express');


const {BlogPosts} = require('./models');


const router = express.Router();
const jsonParser = bodyParser.json();

BlogPosts.create('types of trees','sycammore,elm,etc.','Bilbo baggins', 'Dec 16');


router.get('/', function getBlogPosts (req, res)  {
	res.send(BlogPosts.get());
});

function sendStatus(res, code) {
	res.status(code).send('status ' + code);

}


router.post('/', jsonParser, function addBlogPost (req, res)  {
	var body = req.body;

	BlogPosts.create(body.title, body.content, body.author, body.publishDate);
	
	sendStatus(res, 201);
});

router.delete('/:id', function deletePost (req, res) {
	BlogPosts.delete(req.params.id);
	
	sendStatus(res, 202);
});

router.put('/:id', jsonParser, function updateBlogPost (req, res)  {
	const newPost = {
		id: req.params.id,
		title: req.body.title,
		content: req.body.content,
		author: req.body.author,
		publishDate: req.body.publishDate
	};

	BlogPosts.update(newPost);
	
	sendStatus(res, 202)
});

module.exports = router;