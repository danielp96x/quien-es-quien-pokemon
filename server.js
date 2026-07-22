const express = require("express");
const http = require("http");
const { Server } = require("socket.io");

const app = express();
const server = http.createServer(app);

const io = new Server(server);

app.use(express.static(__dirname));

io.on("connection", (socket) => {

    console.log("🟢 Usuario conectado:", socket.id);

    socket.on("disconnect", () => {

        console.log("🔴 Usuario desconectado:", socket.id);

    });

});

server.listen(3000, () => {

    console.log("🚀 Servidor iniciado");
    console.log("http://localhost:3000");

});
