// =========================================
// ¿QUIÉN ES ESE POKÉMON?
// GAME ENGINE V3.2
// =========================================


const MAX_POKEMON_TABLERO = 30;
// LIMITES DEL JUEGO

const MAX_PREGUNTAS = 10;

const MAX_INTENTOS = 5;

let tiempo = 0;
let reloj = null;


let partidaActual = {

    pokemonTablero: [],
    pokemonSecreto: null,
    preguntas: 0,
    errores: 0

};



// =========================================
// NUEVA PARTIDA
// =========================================


function nuevaPartida(){


    if(
        typeof pokedexCompleta === "undefined" ||
        pokedexCompleta.length === 0
    ){

        alert("Pokédex no cargada");
        return;

    }



    partidaActual.preguntas = 0;
    partidaActual.errores = 0;
preguntasUsadas = [];
    
    registrarPartida();



    const selector =
        document.getElementById("modoJuego");


    const modo =
        selector ? selector.value : "todas";



    let pokemonDisponibles =
        [...pokedexCompleta];



    // ==============================
    // FILTRO GENERACIÓN
    // ==============================


    if(modo.startsWith("gen")){


        const gen =
            Number(
                modo.replace("gen","")
            );


        pokemonDisponibles =
            pokemonDisponibles.filter(
                p =>
                p.generacion === gen
            );

    }



    if(pokemonDisponibles.length === 0){

        alert("No hay Pokémon");
        return;

    }




    // ==============================
    // CREAR TABLERO
    // ==============================


    pokemonDisponibles =
        pokemonDisponibles.sort(
            ()=>Math.random()-0.5
        );



    partidaActual.pokemonTablero =
        pokemonDisponibles.slice(
            0,
            Math.min(
                MAX_POKEMON_TABLERO,
                pokemonDisponibles.length
            )
        );



    partidaActual.pokemonSecreto =
        partidaActual.pokemonTablero[
            Math.floor(
                Math.random() *
                partidaActual.pokemonTablero.length
            )
        ];




    console.log("Modo:",modo);
    console.log(
        "Pokémon encontrados:",
        pokemonDisponibles.length
    );

    console.log(
        "Tablero:",
        partidaActual.pokemonTablero.length
    );

    console.log(
        "Secreto:",
        partidaActual.pokemonSecreto
    );



    actualizarContadores();


    mostrarTablero();


    crearPanelFiltros();


}




// =========================================
// TABLERO
// =========================================


function mostrarTablero(){


    const tablero =
        document.getElementById("tablero");


    if(!tablero)return;



    tablero.innerHTML="";



    partidaActual.pokemonTablero.forEach(
        pokemon=>{


            tablero.appendChild(
                crearCartaPokemon(pokemon)
            );


        }
    );


}




// =========================================
// CARTAS
// =========================================


function crearCartaPokemon(pokemon){


    const carta =
        document.createElement("div");



    carta.className =
        "pokemon-card oculta";



    carta.dataset.id =
        pokemon.id;



    carta.innerHTML = `

    <div class="pokemon-overlay"></div>

    <img
    src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.id}.png"
    >

    <h3>???</h3>

    `;



  carta.onclick = () => {

    comprobarPokemon(
        pokemon,
        carta
    );

};

    return carta;
}

// =========================================
// COMPROBAR RESPUESTA
// =========================================


function comprobarPokemon(
    pokemon,
    carta
){  


    if(
        pokemon.id ===
        partidaActual.pokemonSecreto.id
    ){
        registrarVictoria();

        alert(
            "🎉 Correcto: "
            +pokemon.nombre
        );

        return;

    }



    carta.classList.add(
        "eliminado"
    );


    partidaActual.errores++;


    actualizarContadores();


}



// =========================================
// CONTADORES
// =========================================


function actualizarContadores(){


    const restantes =
        document.getElementById(
            "restantes"
        );


    if(restantes){

        restantes.textContent =
        document.querySelectorAll(
            ".pokemon-card:not(.eliminado)"
        ).length
        ||
        partidaActual.pokemonTablero.length;

    }


}




// =========================================
// PANEL FILTROS
// =========================================


function crearPanelFiltros(){

    const panel =
        document.getElementById("panelPreguntas");


    if(!panel) return;


    panel.innerHTML = `


    <h2>🔎 Preguntas</h2>



    <details open>

        <summary>⚔️ Tipos</summary>

        <div class="grupo-filtros">


            <button onclick="filtrarTipo('Normal')">
            Normal
            </button>

            <button onclick="filtrarTipo('Fuego')">
            🔥 Fuego
            </button>

            <button onclick="filtrarTipo('Agua')">
            💧 Agua
            </button>

            <button onclick="filtrarTipo('Planta')">
            🌱 Planta
            </button>

            <button onclick="filtrarTipo('Eléctrico')">
            ⚡ Eléctrico
            </button>

            <button onclick="filtrarTipo('Hielo')">
            ❄️ Hielo
            </button>

            <button onclick="filtrarTipo('Lucha')">
            🥊 Lucha
            </button>

            <button onclick="filtrarTipo('Veneno')">
            ☠️ Veneno
            </button>

            <button onclick="filtrarTipo('Tierra')">
            🌎 Tierra
            </button>

            <button onclick="filtrarTipo('Volador')">
            🪽 Volador
            </button>

            <button onclick="filtrarTipo('Psíquico')">
            🔮 Psíquico
            </button>

            <button onclick="filtrarTipo('Bicho')">
            🐛 Bicho
            </button>

            <button onclick="filtrarTipo('Roca')">
            🪨 Roca
            </button>

            <button onclick="filtrarTipo('Fantasma')">
            👻 Fantasma
            </button>

            <button onclick="filtrarTipo('Dragón')">
            🐉 Dragón
            </button>

            <button onclick="filtrarTipo('Siniestro')">
            🌑 Siniestro
            </button>

            <button onclick="filtrarTipo('Acero')">
            ⚙️ Acero
            </button>

            <button onclick="filtrarTipo('Hada')">
            ✨ Hada
            </button>


        </div>

    </details>





    <details>

        <summary>🏆 Características</summary>


        <div class="grupo-filtros">


            <button onclick="filtrarCategoria('legendario','Legendario')">
            🏆 Legendario
            </button>


            <button onclick="filtrarCategoria('mitico','Mítico')">
            ✨ Mítico
            </button>


            <button onclick="filtrarCategoria('pseudo','Pseudo')">
            🐉 Pseudo
            </button>


            <button onclick="filtrarCategoria('inicial','Inicial')">
            🌱 Inicial
            </button>


            <button onclick="filtrarCategoria('eevee','Eevee')">
            🦊 Eevee
            </button>


            <button onclick="filtrarCategoria('paradoja','Paradoja')">
            ⚡ Paradoja
            </button>


            <button onclick="filtrarCategoria('ultraente','Ultraente')">
            🌀 Ultraente
            </button>


        </div>


    </details>






    <details>

        <summary>🌎 Generación</summary>


        <div class="grupo-filtros">


            <button onclick="filtrarGeneracion(1)">
            Gen 1
            </button>


            <button onclick="filtrarGeneracion(2)">
            Gen 2
            </button>


            <button onclick="filtrarGeneracion(3)">
            Gen 3
            </button>


            <button onclick="filtrarGeneracion(4)">
            Gen 4
            </button>


            <button onclick="filtrarGeneracion(5)">
            Gen 5
            </button>


            <button onclick="filtrarGeneracion(6)">
            Gen 6
            </button>


            <button onclick="filtrarGeneracion(7)">
            Gen 7
            </button>


            <button onclick="filtrarGeneracion(8)">
            Gen 8
            </button>


            <button onclick="filtrarGeneracion(9)">
            Gen 9
            </button>


        </div>


    </details>





    <details>

        <summary>🎨 Color</summary>


        <div class="grupo-filtros">


            <button onclick="filtrarColor('Rojo')">
            🔴 Rojo
            </button>


            <button onclick="filtrarColor('Azul')">
            🔵 Azul
            </button>


            <button onclick="filtrarColor('Verde')">
            🟢 Verde
            </button>


            <button onclick="filtrarColor('Amarillo')">
            🟡 Amarillo
            </button>


            <button onclick="filtrarColor('Negro')">
            ⚫ Negro
            </button>


            <button onclick="filtrarColor('Blanco')">
            ⚪ Blanco
            </button>


            <button onclick="filtrarColor('Rosa')">
            🩷 Rosa
            </button>


            <button onclick="filtrarColor('Morado')">
            🟣 Morado
            </button>


            <button onclick="filtrarColor('Marrón')">
            🟤 Marrón
            </button>


        </div>


    </details>



    `;

}
// =========================================
// ACTUALIZAR CONTADOR RESTANTES
// =========================================

function actualizarContadorRestantes(){


    const cartas =
        document.querySelectorAll(
            ".pokemon-card:not(.eliminado)"
        );


    const contador =
        document.getElementById(
            "restantes"
        );


    if(contador){

        contador.textContent =
            cartas.length;

    }


}
// =========================================
// BOTÓN ESTADÍSTICAS
// =========================================

const botonStats =
    document.getElementById("verEstadisticas");


if(botonStats){

    botonStats.addEventListener(
        "click",
        mostrarEstadisticas
    );

}



// =========================================
// MOSTRAR ESTADÍSTICAS
// =========================================

function mostrarEstadisticas(){


    if(
        typeof obtenerEstadisticas !== "function"
    ){

        alert(
        "⚠️ Sistema de estadísticas no cargado"
        );

        return;

    }



    const stats =
        obtenerEstadisticas();



    const porcentaje =
        stats.partidas === 0
        ? 0
        :
        Math.round(
            (stats.victorias /
            stats.partidas)
            *100
        );



    alert(`

📊 ESTADÍSTICAS

🏆 Victorias:
${stats.victorias}

🎮 Partidas:
${stats.partidas}

📈 Porcentaje:
${porcentaje}%

⏱ Mejor tiempo:
${stats.mejorTiempo ?? "--"}

⭐ Mejor puntuación:
${stats.mejorPuntuacion}

❓ Preguntas:
${stats.preguntas}

❌ Errores:
${stats.errores}

    `); 
}