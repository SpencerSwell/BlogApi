'use-strict';

const chai = require ('chai');
const chaiHttp = require('chai-http');

const {router} = require('./routes');
const routes = require('./routes');
const server = require('./index');

chai.use(chaiHttp);

describe ('router', function router () {

	it('When given a proper request should return a list of JSON objects', function () {
		chai.request(app)
		.get('/blog-posts')

	})
})