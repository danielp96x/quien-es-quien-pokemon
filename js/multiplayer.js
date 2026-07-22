console.log("🎮 Multiplayer cargado");


import { database } from "./firebase.js";

import {
    ref,
    set,
    get,
    child,
    update,
    onValue
} from "https://www.gstatic.com/firebasejs/12.16.0/firebase-database.js";

console.log("🎮 Multiplayer con Firebase cargado");

let partidaMulti = {
    sala: null,
    jugador: null,
    pokemonJugador1: null,
    pokemonJugador2: null,
    listo1: false,
    listo2: false
};



async function crearSala() {

    const codigo = Math.random()
        .toString(36)
        .substring(2, 7)
        .toUpperCase();

    partidaMulti.sala = codigo;
    partidaMulti.jugador = 1;

    await set(ref(database, "salas/" + codigo), {

        jugador1: true,
        jugador2: false,
        tablero: partidaActual.pokemonTablero.map(p => p.id)

    });

    alert("Sala creada: " + codigo);

}



// UNIRSE

function unirseSala() {

    let sala =
        JSON.parse(
            localStorage.getItem("salaPokemon")
        );


    if (!sala) {

        alert("No existe sala");
        return;

    }


    partidaActual.pokemonTablero =
        sala.tablero.map(id =>
            pokedex.find(p => p.id === id)
        );


    alert(
        "Tablero recibido"
    );


}



// ELEGIR POKEMON

function elegirPokemonMulti(idPokemon) {


    const pokemon =
        pokedex.find(
            p => p.id === idPokemon
        );


    if (!pokemon) {

        console.log(
            "Pokémon no encontrado"
        );

        return;

    }



    if (partidaMulti.jugador === 1) {

        partidaMulti.pokemonJugador1 =
            pokemon;

        partidaMulti.listo1 = true;


    }


    if (partidaMulti.jugador === 2) {

        partidaMulti.pokemonJugador2 =
            pokemon;

        partidaMulti.listo2 = true;

    }



    alert(
        "✅ Elegiste "
        +
        pokemon.nombre
    );



    comprobarListos();

}




function comprobarListos() {


    if (
        partidaMulti.listo1 &&
        partidaMulti.listo2
    ) {

        iniciarDuelo();

    }


}




function iniciarDuelo() {


    alert(
        "🔥 ¡Comienza el duelo!\n\n" +
        "Cada jugador debe descubrir el Pokémon rival"
    );


    console.log(
        "Jugador 1:",
        partidaMulti.pokemonJugador1
    );


    console.log(
        "Jugador 2:",
        partidaMulti.pokemonJugador2
    );


}