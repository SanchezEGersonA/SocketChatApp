const mongoose = require('mongoose');

let Schema = mongoose.Schema;

const profileSchema = new Schema({

    userID: {
        type: Schema.Types.ObjectId,
        ref: 'Usuario'
    },

    configurationID: {
        type: Schema.Types.ObjectId,
        ref: 'Configuracion'
    }

});

module.exports = mongoose.model("Profile", profileSchema);