const mongoose = require('mongoose');

let Schema = mongoose.Schema;

const configurationSchema = new Schema({

    value: {
        type: Number,
        requiered: [true, "EL valor es necesario"]
    },

    description: {
        type: String
    }

});

module.exports = mongoose.model("Configuration", configurationSchema);