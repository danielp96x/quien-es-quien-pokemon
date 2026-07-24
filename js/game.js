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
    errores: 0,
    terminada: false

};



// =========================================
// NUEVA PARTIDA
// =========================================


function nuevaPartida() {


    if (
        typeof pokedexCompleta === "undefined" ||
        pokedexCompleta.length === 0
    ) {

        alert("Pokédex no cargada");
        return;

    }
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


    if (modo.startsWith("gen")) {


        const gen =
            Number(
                modo.replace("gen", "")
            );


        pokemonDisponibles =
            pokemonDisponibles.filter(
                p =>
                    p.generacion === gen
            );

    }


    // ==============================
    // FILTRO CARACTERÍSTICAS
    // ==============================

    if (modo === "legendarios") {

        pokemonDisponibles =
            pokemonDisponibles.filter(
                p => p.legendario === true
            );

    }


    if (modo === "miticos") {

        pokemonDisponibles =
            pokemonDisponibles.filter(
                p => p.mitico === true
            );

    }


    if (modo === "pseudo") {

        pokemonDisponibles =
            pokemonDisponibles.filter(
                p => p.pseudo === true
            );

    }

    // ==============================
    // FILTRO INICIALES
    // ==============================

    if (modo === "iniciales") {

        pokemonDisponibles =
            pokemonDisponibles.filter(
                p => p.inicial === true
            );

    }

   
    // ==============================
// FILTRO ULTRAENTES
// ==============================

if (modo === "ultraentes") {

    pokemonDisponibles =
        pokemonDisponibles.filter(
            p => p.ultraente === true
        );

}


// ==============================
// FILTRO PARADOJAS
// ==============================

if (modo === "paradojas") {

    pokemonDisponibles =
        pokemonDisponibles.filter(
            p => p.paradoja === true
        );

}


// ==============================
// FILTRO EEVEE
// ==============================

if (modo === "eevee") {

    pokemonDisponibles =
        pokemonDisponibles.filter(
            p => p.eevee === true
        );

}


// ==============================
// VALIDAR RESULTADO FINAL
// ==============================

// ==============================
// VALIDAR RESULTADO FINAL
// ==============================

console.log("MODO:", modo);
console.log("POKEMON DESPUÉS DE FILTROS:", pokemonDisponibles.length);
console.log(
    pokemonDisponibles.slice(0,10)
);


if (pokemonDisponibles.length === 0) {

    alert("No hay Pokémon con ese filtro");
    return;

}
    // ==============================
    // CREAR TABLERO
    // ==============================

console.log(
    "ULTRAENTES DISPONIBLES:",
    pokemonDisponibles.filter(
        p => p.ultraente === true
    )
);
    pokemonDisponibles =
        pokemonDisponibles.sort(
            () => Math.random() - 0.5
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




    console.log("Modo:", modo);
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


function mostrarTablero() {


    const tablero =
        document.getElementById("tablero");


    if (!tablero) return;



    tablero.innerHTML = "";



    partidaActual.pokemonTablero.forEach(
        pokemon => {


            tablero.appendChild(
                crearCartaPokemon(pokemon)
            );


        }
    );


}




// =========================================
// CARTAS
// =========================================


function crearCartaPokemon(pokemon) {


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


function comprobarPokemon(pokemon, carta) {
    if (partidaActual.terminada) {
        console.log("PARTIDA YA TERMINADA");
        return;
    }
    // Evita volver a pulsar una carta eliminada
    if (carta.classList.contains("eliminado")) {
        return;
    }

    if (pokemon.id === partidaActual.pokemonSecreto.id) {
        partidaActual.terminada = true;
        detenerTiempo();
        registrarVictoria();

        alert(
            "🎉 ¡Correcto!\n\nEra " + pokemon.nombre + "."
        );

        return;
    }


    // Carta incorrecta
    carta.classList.add("eliminado");

    partidaActual.errores++;

    actualizarContadores();
    if (partidaActual.errores >= MAX_INTENTOS) {
        detenerTiempo();
        alert(
            "💀 Has perdido.\n\nEl Pokémon secreto era " +
            partidaActual.pokemonSecreto.nombre
        );

        nuevaPartida();

        return;
    }
    alert(
        "❌ Ese no es el Pokémon secreto.\n\n¡Sigue haciendo preguntas antes de arriesgarte!"
    );

}



// =========================================
// CONTADORES
// =========================================


function actualizarContadores() {


    const restantes =
        document.getElementById(
            "restantes"
        );


    if (restantes) {

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


function crearPanelFiltros() {

    const panel =
        document.getElementById("panelPreguntas");


    const tiposDisponibles = new Set();

    partidaActual.pokemonTablero.forEach(pokemon => {

        pokemon.tipos.forEach(tipo => {
            tiposDisponibles.add(tipo);
        });

    });


    panel.innerHTML = `
 
    <h2>🔎 Preguntas</h2>



    <details open>

        <summary>⚔️ Tipos</summary>

        <div class="grupo-filtros">

${tiposDisponibles.has("Normal") ? `
<button onclick="filtrarTipo('Normal')">
Normal
</button>
` : ""}

${tiposDisponibles.has("Fuego") ? `
<button onclick="filtrarTipo('Fuego')">
🔥 Fuego
</button>
` : ""}

${tiposDisponibles.has("Agua") ? `
<button onclick="filtrarTipo('Agua')">
💧 Agua
</button>
` : ""}

${tiposDisponibles.has("Planta") ? `
<button onclick="filtrarTipo('Planta')">
🌱 Planta
</button>
` : ""}

${tiposDisponibles.has("Eléctrico") ? `
<button onclick="filtrarTipo('Eléctrico')">
⚡ Eléctrico
</button>
` : ""}
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



<button onclick="preguntarCaracteristica('legendario','Legendario')">
🏆 Legendario
</button>


<button onclick="preguntarCaracteristica('mitico','Mítico')">
✨ Mítico
</button>


<button onclick="preguntarCaracteristica('pseudo','Pseudo')">
🐉 Pseudo
</button>


<button onclick="preguntarCaracteristica('inicial','Inicial')">
🌱 Inicial
</button>


<button onclick="preguntarCaracteristica('eevee','Eevee')">
🦊 Eevee
</button>


<button onclick="preguntarCaracteristica('paradoja','Paradoja')">
⚡ Paradoja
</button>


<button onclick="preguntarCaracteristica('ultraente','Ultraente')">
🌀 Ultraente
</button>


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

function actualizarContadorRestantes() {


    const cartas =
        document.querySelectorAll(
            ".pokemon-card:not(.eliminado)"
        );


    const contador =
        document.getElementById(
            "restantes"
        );


    if (contador) {

        contador.textContent =
            cartas.length;

    }


}
// =========================================
// BOTÓN ESTADÍSTICAS
// =========================================

const botonStats =
    document.getElementById("verEstadisticas");


if (botonStats) {

    botonStats.addEventListener(
        "click",
        mostrarEstadisticas
    );

}



// =========================================
// MOSTRAR ESTADÍSTICAS
// =========================================

function mostrarEstadisticas() {


    if (
        typeof obtenerEstadisticas !== "function"
    ) {

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
                * 100
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