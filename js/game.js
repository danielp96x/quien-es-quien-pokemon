// =========================================
// ¿QUIÉN ES ESE POKÉMON? V3.0
// Motor principal del juego
// =========================================


let partidaActual = {

    pokemonTablero: [],
    pokemonSecreto: null,
    preguntas: 0,
    errores: 0

};


// Crear nueva partida

function nuevaPartida(){

    console.log("🚀 Nueva partida creada");

    console.log("Base Pokémon:", pokemonData);
    console.log("Cantidad Pokémon:", pokemonData.length);


    partidaActual.pokemonTablero = [];

    partidaActual.preguntas = 0;

    partidaActual.errores = 0;


    let mezcla = [...pokemonData]
        .sort(() => Math.random() - 0.5);


    partidaActual.pokemonTablero =
        mezcla.slice(
            0,
            Math.min(30, mezcla.length)
        );


    console.log(
        "Pokémon en tablero:",
        partidaActual.pokemonTablero.length
    );


    if(partidaActual.pokemonTablero.length > 0){

        partidaActual.pokemonSecreto =
        partidaActual.pokemonTablero[
            Math.floor(
                Math.random() *
                partidaActual.pokemonTablero.length
            )
        ];


        console.log(
            "Pokémon secreto:",
            partidaActual.pokemonSecreto.nombre
        );

    }


    mostrarTablero();

}



// Mostrar tablero

function mostrarTablero(){

    const tablero =
    document.getElementById("tablero");


    tablero.innerHTML = "";


    partidaActual.pokemonTablero.forEach(pokemon => {


        const carta =
        document.createElement("div");


        carta.className =
        "pokemon-card oculta";


        carta.innerHTML = `

            <img src="${pokemon.imagen}">

            <h3>???</h3>

        `;


        carta.addEventListener("click", function(){

            comprobarPokemon(
                pokemon,
                carta
            );

        });


        tablero.appendChild(carta);


    });

}



// Revisar selección

function comprobarPokemon(pokemon,carta){


    if(
        pokemon.id === partidaActual.pokemonSecreto.id
    ){

        carta.style.boxShadow =
        "0 0 25px gold";


        alert(
            "🎉 ¡Correcto! Era " +
            pokemon.nombre
        );


    }else{


        carta.classList.add("eliminado");

carta.innerHTML = `
    <div class="cruz">❌</div>
`;


        partidaActual.errores++;

    }

}
