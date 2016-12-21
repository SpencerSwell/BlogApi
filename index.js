'use-strict';
const express = require('express');

const routes = require('./routes')

const {BlogPosts} = require('./models');

const mongoose = require('mongoose');

const app = express();

app.use('/blog-posts', routes);


const port = app.listen(process.env.PORT || 8080, () => {
  console.log(`Your app is listening on port ${process.env.PORT || 8080}`);
});

const dataBase_URL = process.env.DATABASE_URL || global.DATABASE_URL;

module.exports = {app,port,dataBase_URL};

