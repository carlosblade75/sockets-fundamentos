const { io } = require('../server');

// IO = esta es la comunicación con del backend
io.on('connection', (client) => {

    console.log('Usuario conectado');

    client.emit('enviarMensaje', {
        usuario: 'Admin',
        message: 'Bienvenido a  esta aplicación'
    });

    client.on('disconnect', () => {

        console.log('Usuario desconectado');
    });

    // Escuchar al cliente
    // El parámetro callback sirve para notificar al cliente que se envió bien la información
    client.on('enviarMensaje', (data, callback) => {

        console.log('Mensaje del cliente: ', data);

        client.broadcast.emit('enviarMensaje', data);
        // if (message.usuario) {
        //     callback({
        //         resp: 'TODO SALIO BIEN!!'
        //     });
        // } else {
        //     callback({
        //         resp: 'TODO SALIO MAL!!'
        //     });

        // }

    });

});