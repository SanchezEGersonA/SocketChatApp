const jwt = require('jsonwebtoken');

/*****************************************************
 * VERIFICAR TOKEN
 *****************************************************/
let verificarToken = (req, res, next) => {

    let token = req.get('token'); //Authorization

    jwt.verify(token, process.env.SEED, (err, decoded) => {

        if (err) {
            return res.status(401).json({
                ok: false,
                err: {
                    message: 'Token no valido!!!'
                }
            });
        }

        req.usuario = decoded.usuario;
        next();

    });

};

module.exports = {
    verificarToken
};