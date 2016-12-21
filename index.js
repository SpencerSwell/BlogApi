'use-strict';
const express = require('express');

const routes = require('./routes')

const {BlogPosts} = require('./models');

const app = express();

app.use('/blog-posts', routes)


const port = app.listen(process.env.PORT || 8080, () => {
  console.log(`Your app is listening on port ${process.env.PORT || 8080}`);
});

const dataBase_URL = process.env.DATABASE_URL || global.DATABASE_URL;

module.exports = app;

module.exports = port;

module.exports = dataBase_URL;
