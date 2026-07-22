// =========================================
// ¿QUIÉN ES ESE POKÉMON? V3.1
// MOTOR DEL JUEGO
// =========================================


// =========================================
// VARIABLES GLOBALES
// =========================================
const MAX_POKEMON_TABLERO = 30;

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

function nuevaPartida() {

    // Verificar que la Pokédex esté lista
    if (
        typeof pokedexLista !== "undefined" &&
        !pokedexLista
    ) {

        alert("⏳ Espera, cargando Pokédex...");
        return;

    }

    iniciarTiempo();

    partidaActual.preguntas = 0;
    partidaActual.errores = 0;
    partidaActual.pokemonTablero = [];

    // ==============================
    // MODO DE JUEGO
    // ==============================

    const selectorModo = document.getElementById("modoJuego");
    const modo = selectorModo ? selectorModo.value : "normal";

    // ==============================
    // BASE DE POKÉMON
    // ==============================

    let baseJuego =
        (typeof pokedexCompleta !== "undefined" &&
            pokedexCompleta.length > 0)
            ? pokedexCompleta
            : pokemonData;

    // ==============================
    // FILTROS POR MODO
    // ==============================

    switch (modo) {

        case "gen1":
            baseJuego = baseJuego.filter(p => p.generacion === 1);
            break;

        case "gen2":
            baseJuego = baseJuego.filter(p => p.generacion === 2);
            break;

        case "gen3":
            baseJuego = baseJuego.filter(p => p.generacion === 3);
            break;

        case "legendarios":
            baseJuego = baseJuego.filter(p => p.legendario);
            break;

        case "miticos":
            baseJuego = baseJuego.filter(p => p.mitico);
            break;

        case "pseudo":
            baseJuego = baseJuego.filter(p => p.pseudo);
            break;

        case "ultraentes":
            baseJuego = baseJuego.filter(p => p.ultraente);
            break;

        case "paradojas":
            baseJuego = baseJuego.filter(p => p.paradoja);
            break;

        case "eevee":
            baseJuego = baseJuego.filter(p => p.eevee);
            break;

        case "iniciales":
            baseJuego = baseJuego.filter(p => p.inicial);
            break;
    }

    // ==============================
    // VALIDAR RESULTADOS
    // ==============================

    if (baseJuego.length === 0) {

        alert("No existen Pokémon para este modo de juego.");
        return;
    }

    const mezcla = [...baseJuego].sort(() => Math.random() - 0.5);

    let cantidadTablero = MAX_POKEMON_TABLERO;




    // En algunos modos mostramos todos los disponibles
    const TABLERO_COMPLETO = new Set([
        "pseudo",
        "miticos",
        "ultraentes",
        "paradojas",
        "eevee"
    ]);

    if (TABLERO_COMPLETO.has(modo)) {
        cantidadTablero = baseJuego.length;
    }
    cantidadTablero = Math.min(cantidadTablero, baseJuego.length);

    partidaActual.pokemonTablero =
        mezcla.slice(0, cantidadTablero);

    const restantes = document.getElementById("restantes");

    if (restantes) {
        restantes.textContent = partidaActual.pokemonTablero.length;
    }

    const preguntas = document.getElementById("preguntas");

    if (preguntas) {
        preguntas.textContent = "0";
    }

    // ==============================
    // ELEGIR POKÉMON SECRETO
    // ==============================

    partidaActual.pokemonSecreto =
        partidaActual.pokemonTablero[
        Math.floor(
            Math.random() *
            partidaActual.pokemonTablero.length
        )
        ];

    console.log("Modo:", modo);

    console.log("Pokémon encontrados:", baseJuego.length);

    console.log("Pokémon en tablero:", partidaActual.pokemonTablero.length);

    console.log("Pokémon secreto:", partidaActual.pokemonSecreto);

    // ==============================
    // MOSTRAR TABLERO
    // ==============================

    mostrarTablero();
    crearPanelPreguntas(modo);
}

function mostrarTablero() {

    const tablero = document.getElementById("tablero");

    if (!tablero) {
        console.error("❌ No se encontró el tablero.");
        return;
    }

    // Limpiar tablero
    tablero.innerHTML = "";

    // Crear una carta por cada Pokémon
    partidaActual.pokemonTablero.forEach(pokemon => {

        const carta = crearCartaPokemon(pokemon);

        tablero.appendChild(carta);

    });

}

// =========================================
// CREAR CARTA POKÉMON
// =========================================

function crearCartaPokemon(pokemon) {

    const carta = document.createElement("div");

    carta.className = "pokemon-card oculta";

    carta.dataset.id = pokemon.id;
    carta.dataset.nombre = pokemon.nombre;

    carta.innerHTML = `
    <div class="pokemon-overlay"></div>
<img
    src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.id}.png"
    alt="${pokemon.nombre}"
    loading="lazy"
>

    <h3>???</h3>
`;

    carta.addEventListener("click", () => {
        comprobarPokemon(pokemon, carta);
    });

    return carta;

}
// =========================================
// COMPROBAR POKÉMON
// =========================================

function comprobarPokemon(pokemon, carta) {

    // Evitar volver a pulsar una carta eliminada
    if (carta.classList.contains("eliminado")) return;

    // ¿Es el Pokémon secreto?
    if (pokemon.id === partidaActual.pokemonSecreto.id) {

        mostrarMensajeCarta(carta, "🎉 ¡Correcto!");

        setTimeout(() => {
            mostrarVictoria(pokemon);
        }, 500);
        return;
    }

    // Pokémon incorrecto
    mostrarMensajeCarta(carta, "❌ No es");

    setTimeout(() => {
        carta.classList.add("eliminado");
        actualizarContadorRestantes();
    }, 800);

    partidaActual.errores++;
    setTimeout(() => {
        carta.classList.add("eliminado");
        actualizarContadorRestantes();
    }, 800);

    partidaActual.errores++;
}



// =========================================
// CONTADOR DE PREGUNTAS
// =========================================

function actualizarContadorPreguntas() {

    const contador = document.getElementById("preguntas");

    if (!contador) return;

    contador.textContent = partidaActual.preguntas;

}

// =========================================
// CONTADOR DE RESTANTES
// =========================================

function actualizarContadorRestantes() {

    const restantes =
        document.querySelectorAll(
            ".pokemon-card:not(.eliminado)"
        ).length;

    const contador =
        document.getElementById("restantes");

    if (!contador) return;

    contador.textContent = restantes;

}

// =========================================
// MENSAJE SOBRE LA CARTA
// =========================================

function mostrarMensajeCarta(carta, mensaje) {

    const overlay = carta.querySelector(".pokemon-overlay");

    if (!overlay) return;

    overlay.textContent = mensaje;

    overlay.classList.add("mostrar");

    setTimeout(() => {

        overlay.classList.remove("mostrar");

    }, 1500);

}
// =========================================
// PANTALLA DE VICTORIA
// =========================================

function mostrarVictoria(pokemon) {

    detenerTiempo();
    registrarVictoria();

    const minutos = Math.floor(tiempo / 60);
    const segundos = tiempo % 60;

    const tiempoTexto =
        String(minutos).padStart(2, "0") +
        ":" +
        String(segundos).padStart(2, "0");

    const pantalla = document.createElement("div");

    pantalla.className = "victoria";
    const stats = obtenerEstadisticas();
    const puntuacion = calcularPuntuacion();
    pantalla.innerHTML = `
        <div class="caja-victoria">

            <h2>🏆 ¡Felicidades!</h2>

            <img
            src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.id}.png"
            alt="${pokemon.nombre}">

            <h3>${pokemon.nombre.toUpperCase()}</h3>
            <p style="font-size:22px;margin:12px 0;">
    ⭐ <b>${puntuacion}</b> puntos
</p>

            <p>⏱ Tiempo: <b>${tiempoTexto}</b></p>
<p>❓ Preguntas: <b>${partidaActual.preguntas}</b></p>
<p>❌ Errores: <b>${partidaActual.errores}</b></p>

<hr style="margin:15px 0">

<p>🏆 Victorias: <b>${stats.victorias}</b></p>
<p>🎮 Partidas: <b>${stats.partidas}</b></p>
<p>⚡ Mejor tiempo: <b>${stats.mejorTiempo === null
            ? "--"
            : stats.mejorTiempo + " s"
        }</b></p>

            <button id="jugarOtra">
                🔄 Nueva partida
            </button>

        </div>
    `;

    document.body.appendChild(pantalla);

    document
        .getElementById("jugarOtra")
        .addEventListener("click", () => {

            pantalla.remove();
            nuevaPartida();

        });

}
const botonStats = document.getElementById("verEstadisticas");

if (botonStats) {

    botonStats.addEventListener("click", mostrarEstadisticas);

}
// =========================================
// CALCULAR PUNTUACIÓN
// =========================================

function calcularPuntuacion() {

    let puntos = 10000;

    puntos -= tiempo * 10;

    puntos -= partidaActual.errores * 250;

    puntos -= partidaActual.preguntas * 100;

    return Math.max(0, puntos);

}
// =========================================
// MOSTRAR ESTADÍSTICAS
// =========================================

function mostrarEstadisticas() {

    const stats = obtenerEstadisticas();

    const mejorTiempo =
        stats.mejorTiempo === null
            ? "--"
            : stats.mejorTiempo + " s";

    const porcentaje =
        stats.partidas === 0
            ? 0
            : Math.round((stats.victorias / stats.partidas) * 100);

    alert(
        
        `📊 ESTADÍSTICAS

🏆 Victorias: ${stats.victorias}
🎮 Partidas: ${stats.partidas}
📈 Porcentaje: ${porcentaje}%
⏱ Mejor tiempo: ${mejorTiempo}
⭐ Mejor puntuación: ${stats.mejorPuntuacion}
❓ Preguntas: ${stats.preguntas}
❌ Errores: ${stats.errores}`
    );

}