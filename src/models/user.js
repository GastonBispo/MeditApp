const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
    name: { type: String, required: true },
    createdAt: { type: Date, default: Date.now } // seguir schema 
});

// en 'user' estoy definiendo como se va a llamar el schema, para buscar la coleccion mongo corresp.
module.exports = mongoose.model('user', userSchema);