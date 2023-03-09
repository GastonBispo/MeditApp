const mongoose = require('mongoose');
require('dotenv').config();

const password = process.env.PASSWORD;
const dbname = process.env.DBNAME;

const URI = `mongodb+srv://NunesBispo:${password}@cluster0.misvoxy.mongodb.net/${dbname}?retryWrites=true&w=majority`;

const options = {useNewUrlParser: true, useUnifiedTopology: true}

mongoose.connect(URI, options)
    .then(db => console.log('DB is connected!'))
    .catch(err => console.error(err));

module.exports = mongoose;