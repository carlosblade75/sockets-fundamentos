const express = require('express');

// socketIO no trabaja directamente express pero si con el servidor http que trae node por defecto. express usa tb http
const socketIO = require('socket.io');
const http = require('http');

const path = require('path');

const app = express();

let server = http.createServer(app); // le pasamos express al servidoor http para poder usar express

const publicPath = path.resolve(__dirname, '../public');
const PORT = process.env.PORT || 3000;

app.use(express.static(publicPath));

// exportamos el socketIO
module.exports.io = socketIO(server);

require('./sockets/socket');

server.listen(PORT, (err) => {

    if (err) throw new Error(err);

    console.log(`Servidor corriendo en puerto ${ PORT }`);

});