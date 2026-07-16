const tablero = document.getElementById("tablero");
const botonNueva = document.getElementById("nuevaPartida");
const estado = document.getElementById("estado");

let pokemonSecreto = null;
let pokemonDisponibles = [];
let contadorPreguntas = 0;


// NUEVA PARTIDA

function nuevaPartida(){

    pokemonSecreto =
    pokemon[Math.floor(Math.random() * pokemon.length)];


    pokemonDisponibles = [...pokemon];


    pokemon.forEach(poke => {

        poke.descartado = false;

    });


    contadorPreguntas = 0;


    estado.textContent =
    "🎯 Nueva partida. Preguntas: 0";


    document.getElementById("victoria").innerHTML = "";


    mostrarPokemon();


    console.log(
    "Pokémon secreto:",
    pokemonSecreto.nombre
    );

}



// MOSTRAR CARTAS

function mostrarPokemon(){

    tablero.innerHTML = "";


    let activos = pokemonDisponibles.filter(
        poke => !poke.descartado
    );


    let mensajeActual = estado.textContent;

    estado.textContent = 
    mensajeActual + " | 🃏 Pokémon restantes: " + activos.length;


    pokemonDisponibles.forEach(poke => {


        const carta = document.createElement("div");


        carta.className =
        poke.descartado
        ? "carta descartada"
        : "carta";


        carta.onclick = function(){

            if(!poke.descartado){

                elegirPokemon(poke);

            }

        };


        carta.innerHTML = `

        <img src="${poke.imagen}">

        <h3>${poke.nombre}</h3>

        <p>${poke.tipo.join(" / ")}</p>

        `;


        tablero.appendChild(carta);


    });

}



// ELEGIR POKÉMON

function elegirPokemon(poke){

    const victoria =
    document.getElementById("victoria");


    if(poke.nombre === pokemonSecreto.nombre){


        estado.textContent =
        "🏆 ¡Encontraste al Pokémon secreto!";


        victoria.innerHTML = `

        <h2>🎉 ¡Victoria!</h2>

        <h3>${poke.nombre}</h3>

        <img src="${poke.imagen}" width="150">


        <p>
        Preguntas usadas:
        ${contadorPreguntas}
        </p>


        <button onclick="nuevaPartida()">
        🔄 Nueva partida
        </button>

        `;


    }else{


        estado.textContent =
        "❌ No es " + poke.nombre;


    }

}



// PREGUNTA LIBRE

function hacerPregunta(){

let pregunta =
document.getElementById("preguntaJugador")
.value
.toLowerCase();


contadorPreguntas++;


if(pregunta.includes("fuego")){

    preguntarTipo("Fuego");

}

else if(pregunta.includes("agua")){

    preguntarTipo("Agua");

}

else if(pregunta.includes("planta")){

    preguntarTipo("Planta");

}

else if(pregunta.includes("amarillo")){

    preguntarDato("color","Amarillo");

}

else if(
pregunta.includes("última") ||
pregunta.includes("final")
){

    preguntarDato("final",true);

}

else if(
pregunta.includes("inicial")
){

    preguntarDato("inicial",true);

}

else if(
pregunta.includes("evolución")
){

    preguntarDato("evoluciona",true);

}

else if(
pregunta.includes("mega")
){

    preguntarDato("mega",true);

}

else if(
pregunta.includes("gigamax")
){

    preguntarDato("gigamax",true);

}

else if(
pregunta.includes("alas") ||
pregunta.includes("volar")
){

    preguntarDato("alas",true);

}

else if(
pregunta.includes("legendario")
){

    preguntarDato("legendario",true);

}

else if(
pregunta.includes("acuático") ||
pregunta.includes("acuatico")
){

    preguntarDato("acuatico",true);

}

else{

    estado.textContent =
    "🤔 No entiendo esa pregunta todavía";

}

}



// PREGUNTAR TIPO

function preguntarTipo(tipo){

    contadorPreguntas++;
    if(pokemonSecreto.tipo.includes(tipo)){


        estado.textContent =
        "✅ Sí, es tipo " + tipo;


        pokemonDisponibles.forEach(poke=>{


            if(!poke.tipo.includes(tipo)){

                poke.descartado = true;

            }


        });


    }else{


        estado.textContent =
        "❌ No es tipo " + tipo;


        pokemonDisponibles.forEach(poke=>{


            if(poke.tipo.includes(tipo)){

                poke.descartado = true;

            }


        });


    }


    mostrarPokemon();

}



// PREGUNTAR DATOS

function preguntarDato(dato,valor){

contadorPreguntas++;

    if(pokemonSecreto[dato] === valor){


        estado.textContent =
        "✅ Sí";


        pokemonDisponibles.forEach(poke=>{


            if(poke[dato] !== valor){

                poke.descartado = true;

            }


        });


    }else{


        estado.textContent =
        "❌ No";


        pokemonDisponibles.forEach(poke=>{


            if(poke[dato] === valor){

                poke.descartado = true;

            }


        });


    }


    mostrarPokemon();

}



// BOTÓN

botonNueva.onclick = nuevaPartida;


// INICIO

nuevaPartida();


console.log("SCRIPT CARGADO");