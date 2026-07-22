import { database } from "./firebase.js";

import {
    ref,
    set,
    get,
    update,
    onValue
} from "https://www.gstatic.com/firebasejs/12.16.0/firebase-database.js";

console.log("🎮 Multiplayer Firebase iniciado");

const partidaMulti = {
    codigo: null,
    jugador: 0,
    tablero: [],
    pokemonElegido: null
};

function generarCodigo() {
    return Math.random()
        .toString(36)
        .substring(2, 7)
        .toUpperCase();
}
async function crearSala() {

    const codigo = generarCodigo();

    partidaMulti.codigo = codigo;
    partidaMulti.jugador = 1;

    await set(
        ref(database, "salas/" + codigo),
        {
            jugador1: true,
            jugador2: false,
            tablero: partidaActual.pokemonTablero.map(p => p.id)
        }
    );

    alert("Sala creada: " + codigo);

}
