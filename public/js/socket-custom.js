// se usa var en vez de let por temade compatibiliad de navegadores
var socket = io();

// ON son para escuchar
socket.on('connect', function() {

    console.log('Conectado al servidor');
});

socket.on('disconnect', function() {

    console.log('Perdimos conexión con el  servidor');
});

// EMIT para enviar
socket.emit('enviarMensaje', {
    usuario: 'Carlos',
    message: 'Hola Mundo!!'
}, function(resp) {
    console.log('Respuesta del server: ', resp);
});

// Escuchamos la respuesta del servidor
socket.on('enviarMensaje', function(message) {

    console.log('Mensaje del servidor: ', message);
});