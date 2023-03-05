// Este archivo es responsable de definir las rutas de la aplicación. 
// En este archivo, se define una ruta para acceder a la colección sessions 
// y obtener los documentos de esa colección. En este caso, 
// se utiliza el método find() de Mongoose para obtener todos los documentos de la colección.


const express = require('express');
const router = express.Router();

const session = require('../models/session');

//aca con el metodo .find() estoy yendo a buscar la coleccion "sessions"
//pero con el metodo .findOne() estoy buscando de la bbdd la session especifica segun booleanos

// agregar todas las posibles rutas de la app, fabricar urls

router.get('/api/session', async (req, res) => {
    const sessions = await session.findOne({
        respuestas: {
            respuesta1: false,
            respuesta2: false,
            respuesta3: true,
            respuesta4: false,
            respuesta5: true,
            respuesta6: true,
            respuesta7: true
          }
    });
    res.json(sessions);
});

module.exports = router;