const crearMensaje = (nombre, mensaje) => {

    mensaje = censurarMensaje(mensaje);
    return {
        nombre,
        mensaje,
        fecha: new Date().getTime()
    };

}

function censurarMensaje(mensaje) {

    var segMensaje = mensaje.split(" ");
    var mensajeAux = "";
    for (var i = 0; i < segMensaje.length; i++) {
        var palabraAux = "";
        if (palabrasOfensivas.indexOf(segMensaje[i]) != -1) {
            for (var j = 0; j < segMensaje[i].length; j++) {
                palabraAux += "*";
            }
            segMensaje[i] = palabraAux;
        }
        mensajeAux += segMensaje[i] + " ";
    }

    return mensajeAux;

}

var palabrasOfensivas = [
    "mierda", "carajo", "ptmr", "tmr", "ctm", "puto", "puta", "putx", "perra", "cabro",
    "pendejo", "malnacido", "malparido", "conchatumadre"
];

module.exports = {
    crearMensaje
}