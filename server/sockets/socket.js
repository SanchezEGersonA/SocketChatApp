const { io } = require('../server');
const { Usuarios } = require('../classes/usuarios');
const { crearMensaje } = require('../utilidades/utilidades');

const usuarios = new Usuarios();

io.on('connection', (client) => {

    client.on('entrarChat', (usuario, callback) => {

        // console.log(usuario);

        if (!usuario.nombre || !usuario.sala) {

            return callback({
                error: true,
                mensaje: 'El nombre / sala es necesario'
            });

        }

        client.join(usuario.sala);

        usuarios.agregarPersona(client.id, usuario.nombre, usuario.sala);

        client.broadcast.to(usuario.sala).emit('listaPersonas', usuarios.getPersonasPorSala(usuario.sala));
        client.broadcast.to(usuario.sala).emit('crearMensaje', crearMensaje('Administrador', `${usuario.nombre} se unió`));

        callback(usuarios.getPersonasPorSala(usuario.sala));

    });

    client.on('crearMensaje', (data, callback) => {

        let persona = usuarios.getPersona(client.id);
        let mensaje = crearMensaje(persona.nombre, data.mensaje);

        client.broadcast.to(persona.sala).emit('crearMensaje', mensaje);

        callback(mensaje);

    });

    client.on('disconnect', () => {

        let personaBorrarda = usuarios.borrarPersona(client.id);


        client.broadcast.to(personaBorrarda.sala).emit('crearMensaje', crearMensaje('Administrador', `${personaBorrarda.nombre} salió`));

        client.broadcast.to(personaBorrarda.sala).emit('listaPersonas', usuarios.getPersonasPorSala(personaBorrarda.sala));

    });

    // MENSJAE PRIVADOS
    client.on('mensajePrivado', (data) => {

        let persona = usuarios.getPersona(client.id);

        client.broadcast.to(data.usuarioDestino).emit('mensajePrivado', crearMensaje(persona.nombre, data.mensaje));

    });

});