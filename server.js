const express = requre('express')
const mongoose = require('mongoose')
const logger = require('morgan')

const PORT = process.env.PORT || 3000;

const app = express();

const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost/tracker';

app.use(logger('dev'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));

mongoose.connect(MONGODB_URI, { useNewUrlParser: true });


app.listen(PORT, () => {
    console.log(`App is running on port ${PORT}`)
})