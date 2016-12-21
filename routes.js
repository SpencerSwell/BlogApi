'use-strict';
const bodyParser = require('body-parser');
const express = require('express');
const mongoose = require('mongoose');

const {port,dataBase_URL} = require('./index.js');

const blogPost = require('./schemas');
// const blogPostSchema = mongoose.Schema({});
//  const blogPost = mongoose.model('blog', blogPostSchema);
//.exec() also returns a full fledged promise so maybe line 8 isn't nessecary we'll see
mongoose.Promise = global.Promise;

const router = express.Router();
const jsonParser = bodyParser.json();

mongoose.connect('mongodb://localhost/Blog');
mongoose.connection.once('open', () => {
  console.log("Connection Opened!");
});

blogPost.find().then(function(data){
  console.log(data);
});

router.get('/', function(req, res)  {
  
  blogPost
  .find()
  .exec()
  .then(blogposts => {
      res.json({
        blogposts: blogposts.map(
          (blogpost) => blogpost.apiRepr())
      });
    })
    .catch(
      err => {
        console.error(err);
        res.status(500).json({message: 'Internal server error'});
    });

});

function sendStatus(res, code) {
  res.status(code).send('status ' + code);

}



router.post('/', jsonParser, function addBlogPost (req, res)  {
  
  const requiredFields = ['title', 'content', 'author', 'publishDate'];
  requiredFields.forEach(field => {
    // ensure that required fields have been sent over
    if (! (field in req.body && req.body[field])) {
      return res.status(400).json({message: `Must specify value for ${field}`});
    }
     blogPost
    .create({
      title: req.body.title,
      content: req.body.content,
      author: req.body.author,
      publishDate: req.body.publishDate,
      })
    .then(
      blogpost => res.status(201).json(blogSchema.apiRepr()))
    .catch(err => {
      console.error(err);
      res.status(500).json({message: 'Internal server error'});
    });
});
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
  
  sendStatus(res, 202);
});

module.exports = router;