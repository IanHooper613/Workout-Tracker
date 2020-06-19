//require npm packages express, mongoose, and morgan
const express = require('express')
const mongoose = require('mongoose')
const logger = require('morgan')

//creating Port
const PORT = process.env.PORT || 3000;

//setting up express app
const app = express();


const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost/workout';

//setting up middleware for express
app.use(logger('dev'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));


mongoose.connect(MONGODB_URI, { useNewUrlParser: true });


//routes
require('./routes/htmlRoutes.js')(app)
require('./routes/apiRoutes.js')(app)


//listen on Port
app.listen(PORT, () => {
    console.log(`App is running on port ${PORT}`)
})