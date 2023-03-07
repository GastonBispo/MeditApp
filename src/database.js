// Este archivo es responsable de establecer la conexión con la base de datos MongoDB 
// utilizando la biblioteca de Mongoose. 
// Aquí se define la URI de la base de datos que se va a utilizar
//  y se establece la conexión con la base de datos. 
//  Luego, la conexión se exporta para que pueda ser utilizada por otros archivos de la aplicación.


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