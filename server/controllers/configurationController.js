const express = require('express');

const Configuration = require('../models/configuration');

let app = express();

/*****************************************************************************
 * GET
 *****************************************************************************/
app.get('/configuration', (req, res) => {

    Configuration.find()
        .exec((err, configurations) => {

            if (err) {
                return res.status(500).json({
                    ok: false,
                    err
                });
            }

            res.json({
                ok: true,
                configurations
            });

        });

});

/*****************************************************************************
 * POST
 *****************************************************************************/
app.post('/configuration', (req, res) => {

    let body = req.body;

    let configuracion = new Configuration({
        value: body.value,
        description: body.description
    });

    configuracion.save((err, configuracionDB) => {

        if (err) {
            return res.status(400).json({
                ok: false,
                err
            });
        }

        res.json({
            ok: true,
            configuracion: configuracionDB
        });

    });

});

module.exports = app;