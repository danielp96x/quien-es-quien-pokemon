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
async function unirseSala() {

    const codigo = prompt("Código de la sala:");

    if (!codigo) return;

    const salaRef = ref(database, "salas/" + codigo.toUpperCase());

    const snapshot = await get(salaRef);

    if (!snapshot.exists()) {
        alert("Sala no encontrada");
        return;
    }

    partidaMulti.codigo = codigo.toUpperCase();
    partidaMulti.jugador = 2;

    await update(salaRef, {
        jugador2: true
    });

    alert("✅ Unido a la sala");
}
