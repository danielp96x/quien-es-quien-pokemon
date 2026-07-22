const express = require("express");
const http = require("http");
const { Server } = require("socket.io");

const app = express();
const server = http.createServer(app);

const io = new Server(server);

app.use(express.static(__dirname));

const salas = {};

function generarCodigo() {
    return Math.random()
        .toString(36)
        .substring(2, 7)
        .toUpperCase();
}

io.on("connection", (socket) => {

    console.log("🟢 Conectado:", socket.id);
// ==========================
// POKÉMON ELEGIDO
// ==========================

socket.on("elegirPokemon", (pokemon) => {

    const sala = socket.data.sala;

    if (!sala) return;

    if (!salas[sala].elecciones) {
        salas[sala].elecciones = {};
    }

    salas[sala].elecciones[socket.id] = pokemon;

    console.log(
        "🎯 Pokémon elegido:",
        pokemon.nombre
    );

   if (
    Object.keys(salas[sala].elecciones).length === 2
) {


    const jugadores =
        salas[sala].jugadores;


    jugadores.forEach(jugador => {


        const rival =
            jugadores.find(
                id => id !== jugador
            );


        io.to(jugador).emit(
            "pokemonRival",
            salas[sala].elecciones[rival]
        );


    });


    io.to(sala).emit(
        "comenzarPartida"
    );


    console.log(
        "🔥 Ambos jugadores listos"
    );

}
});
    // ==========================
    // CREAR SALA
    // ==========================

    socket.on("crearSala", () => {

        let codigo;

        do {
            codigo = generarCodigo();
        } while (salas[codigo]);

       salas[codigo] = {
    jugadores: [socket.id],
    tablero: null,
    elecciones: {}
};

        socket.join(codigo);

        socket.data.sala = codigo;

        socket.emit("salaCreada", codigo);

        console.log("🎮 Sala creada:", codigo);

    });

    // ==========================
    // UNIRSE
    // ==========================

    socket.on("unirseSala", (codigo) => {

        codigo = codigo.toUpperCase();

        if (!salas[codigo]) {

            socket.emit(
                "errorSala",
                "❌ Sala no encontrada"
            );

            return;

        }

        if (salas[codigo].jugadores.length >= 2) {

            socket.emit(
                "errorSala",
                "⚠️ La sala está llena"
            );

            return;

        }

        salas[codigo].jugadores.push(socket.id);

        socket.join(codigo);

        socket.data.sala = codigo;

        socket.emit("unidoSala", codigo);

        io.to(codigo).emit("dosJugadores");

        console.log("👥 Sala completa:", codigo);

    });

    // ==========================
    // TABLERO
    // ==========================

   socket.on("enviarTablero", (datos) => {

    const sala = socket.data.sala;

    if (!sala) return;

    salas[sala].tablero = datos.tablero;

    io.to(sala).emit(
        "recibirTablero",
        {
            tablero: datos.tablero
        }
    );

});

    // ==========================
    // DESCONEXIÓN
    // ==========================

    socket.on("disconnect", () => {

        console.log("🔴 Desconectado:", socket.id);

    });

});

server.listen(3000, () => {

    console.log("");
    console.log("🚀 Servidor iniciado");
    console.log("http://localhost:3000");
    console.log("");

});