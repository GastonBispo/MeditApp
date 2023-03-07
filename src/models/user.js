const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
    name: { type: String, required: true },
    lastName: { type: String, required: true},
    email: { type: String, required: true},
    password: { type: String, required: true}, 
    // createdAt: { type: Date, default: Date.now } // seguir schema 
}, { timestamps: true });

// en 'user' estoy definiendo como se va a llamar el schema, para buscar la coleccion mongo corresp.
module.exports = mongoose.model('user', userSchema);