'use-strict';

const chai = require ('chai');
const chaiHttp = require('chai-http');

const router = require('../routes');
const app = require('../index');

const expect = chai.expect;

chai.use(chaiHttp);

describe ('router', function router () {

	it('When given a proper request should return a list of JSON objects', function () {
		return chai.request(app)
		.get('/blog-posts')
		.then( function(res) {
			return chai.request(app)
			expect.res.to.be.json 
			expect.res.status.to.be(200);

		});
	});

	it('When given a post create a new blog post with that data', function () {

		var examplePost = {title:"Somethin something", content:"something", author:"dick", publishDate:"8/7/9000"};
		return chai.request(app)
		.post('/blog-posts')
		.send(examplePost)
		
		.then( function(req,res) {

			return chai.request(app)
			expect.req.to.be.json
			expect.req.body.length.to.be(4)
			expect.req.body.to.be.a('object')
			expect.req.body.keys.to.equal('title', 'content', 'author', 'publishDate')

			
			expect.res.status.to.be(201);

		});
	});

	

 		it('When given an id to delete it should delete it from the database', function() {

 			return chai.request(app)
 			.get('/blog-posts')
 			.then( function(res){

 				return chai.request(app)

 				.delete(`/blog-posts/${res.body[0].id}`)
 				.then( function (res){

 					return chai.request(app)
 					expect.res.status.to.be(202)

 				})
 			})

 	    })
	
	it('Will update a post if given the  id of a current post', function() {

		return chai.request(app)
		.get('blog-posts')
		.then(function(res) {
			
			return chai.request(app)
		let updatedPost = {title:'new', content:'new', author:'new', publishDate:'new', id:`{res.body[1].id}`};
		
			return chai.request(app)
			.then(function (res) {
				return chai.request(app)
				.put(`blog-posts/${res.body[1].id}`)
				.send(updatedPost)

			.then(function(res) {
				return chai.request(app)
				expect.res.status.to.be(202)
				});

			});
		});
	});
 });