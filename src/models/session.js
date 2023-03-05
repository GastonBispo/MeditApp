// Este archivo define el modelo de datos para los documentos de la colección sessions.

const mongoose = require('mongoose');
const { Schema } = mongoose;

const sessionSchema = new Schema({
  componente: String, // El nombre del componente que se debe usar para mostrar la sesión personalizada
  respuestas: {
    respuesta1: Boolean,
    respuesta2: Boolean,
    respuesta3: Boolean,
    respuesta4: Boolean,
    respuesta5: Boolean,
    respuesta6: Boolean,
    respuesta7: Boolean
  },
  sessionName: String, // Un nombre para la sesión personalizada
});

// en 'session' estoy definiendo como se va a llamar el schema, para buscar la coleccion mongo corresp.
module.exports = mongoose.model('session', sessionSchema);

