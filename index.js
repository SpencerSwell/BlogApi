'use-strict';
const express = require('express');

const routes = require('./routes')

const {BlogPosts} = require('./models');

const app = express();

app.use('/blog-posts', routes)


app.listen(process.env.PORT || 8080, () => {
  console.log(`Your app is listening on port ${process.env.PORT || 8080}`);
});