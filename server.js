const express = require('express')
const mongoose = require('mongoose')
const logger = require('morgan')

const PORT = process.env.PORT || 3000;

const app = express();

const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost/workout';

app.use(logger('dev'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));


mongoose.connect(MONGODB_URI, { useNewUrlParser: true });


require('./routes/htmlRoutes.js')(app)
require('./routes/apiRoutes.js')(app)



app.listen(PORT, () => {
    console.log(`App is running on port ${PORT}`)
})