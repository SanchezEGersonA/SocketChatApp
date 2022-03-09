const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

let Schema = mongoose.Schema;

let userSchema = new Schema({

    nombre: {
        type: String,
        required: [true, "El nombre es necesario"]
    },

    apellido: {
        type: String,
        required: [true, "El apellido es necesario"]
    },

    email: {
        type: String,
        unique: true,
        required: [true, "El correo electronico es necesario"]
    },

    password: {
        type: String,
        required: [true, "La contraseña es necesario"]
    },

    born: {
        type: String,
        required: [true, "La fecha de nacimiento es necesario"]
    },

    sex: {
        type: String,
        required: [true, "El sexo es necesario"]
    }

});

userSchema.methods.toJSON = function() {

    let user = this;
    let userObject = user.toObject();
    delete userObject.password;

    return userObject;

}

userSchema.plugin(uniqueValidator, {
    message: "{PATH} debe ser unico"
});

module.exports = mongoose.model("User", userSchema);