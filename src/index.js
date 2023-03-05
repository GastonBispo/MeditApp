//Este archivo es el punto de entrada de la aplicación. 
// En este archivo, se crea una instancia de Express y se configuran los middleware 
// y rutas necesarios para la aplicación. 
// También se inicia el servidor y se establece el puerto en el que se ejecutará la aplicación.


const express = require('express');
const morgan = require('morgan');
const path = require('path');

const { mongoose } = require('./database');

const app = express();

//settings
app.set('port', process.env.PORT || 3030);

//middleweres
app.use(morgan('dev'));
app.use(express.json());

//routes aca defino la ruta del lado navegador con relacion al nombre que tenga la coleccion 
//por lo que vas a tener que agregar todas las rutas fabricadas que desees mostrar 

app.use('/', require('./routes/quiz.routes'));

//static files
app.use(express.static(path.join(__dirname, 'public')));

//empezando el server

app.listen(app.get('port') , () => {
    console.log(`Server on port ${app.get('port')}`);
});