const express = require('express');

const Profile = require('../models/profile');
let { verificarToken } = require('../middleware/authentication');

const app = express();

/*****************************************************************************
 * POST
 *****************************************************************************/
app.post('/profile', (req, res) => {

    let body = req.body;

    let profile = new Profile({
        userID: body.user,
        configurationID: body.configuration
    });

    profile.save((err, profileDB) => {

        if (err) {
            return res.status(500).json({
                ok: false,
                err
            });
        }

        res.status(201).json({
            ok: true,
            categoria: profileDB
        });

    });

});

/*****************************************************************************
 * PUT
 *****************************************************************************/
app.put('/profile/:id', verificarToken, (req, res) => {

    let id = req.params.id;
    let body = req.body;

    Profile.findById(id, (err, profileDB) => {

        if (err) {
            return res.status(500).json({
                ok: false,
                err
            });
        }

        if (!profileDB) {
            return res.status(400).json({
                ok: false,
                err: {
                    message: 'El Id del perfil no es correcto!!!'
                }
            });
        }

        profileDB.configurationID = body.configuration;

        profileDB.save((err, profileSaved) => {

            if (err) {
                return res.status(500).json({
                    ok: false,
                    err
                });
            }

            res.json({
                ok: true,
                producto: profileSaved
            });

        });

    });

});

module.exports = app;