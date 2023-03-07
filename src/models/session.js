// Este archivo define el modelo de datos para los documentos de la colección sessions.

const mongoose = require('mongoose');
const { Schema } = mongoose;

const sessionSchema = new Schema({
  componente: String, // El nombre del componente que se debe usar para mostrar la sesión personalizada
  respuestas: {
    respuesta1: { type: Boolean, require: true}, //los booleanos estan hardcodeados solo a modo de prueba
    respuesta2: { type: Boolean, require: true},
    respuesta3: { type: Boolean, require: true},
    respuesta4: { type: Boolean, require: true},
    respuesta5: { type: Boolean, require: true},
    respuesta6: { type: Boolean, require: true},
    respuesta7: { type: Boolean, require: true}
  },
  sessionName: String, // Un nombre para la sesión personalizada
});

// en 'session' estoy definiendo como se va a llamar el schema, para buscar la coleccion mongo corresp.
module.exports = mongoose.model('session', sessionSchema);

