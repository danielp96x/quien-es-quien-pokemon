// =========================================
// ESTADÍSTICAS DEL JUEGO
// =========================================

const CLAVE_ESTADISTICAS = "pokemonStats";

console.log("STORAGE NUEVO CARGADO");
// Obtener estadísticas

function obtenerEstadisticas() {

    const datos = localStorage.getItem(CLAVE_ESTADISTICAS);

    if (datos) {
        return JSON.parse(datos);
    }

    return {

        partidas: 0,
        victorias: 0,
        preguntas: 0,
        errores: 0,
        mejorTiempo: null,
        mejorPuntuacion: 0

    };

}


// Guardar estadísticas

function guardarEstadisticas(stats) {

    localStorage.setItem(
        CLAVE_ESTADISTICAS,
        JSON.stringify(stats)
    );

}


// Registrar partida

function registrarPartida() {

    const stats = obtenerEstadisticas();

    stats.partidas++;

    guardarEstadisticas(stats);

}


// Registrar victoria

function registrarVictoria() {

    const stats = obtenerEstadisticas();


    stats.victorias++;

    stats.preguntas += partidaActual.preguntas;

    stats.errores += partidaActual.errores;


    if (
        stats.mejorTiempo === null ||
        tiempo < stats.mejorTiempo
    ) {

        stats.mejorTiempo = tiempo;

    }


    const puntuacion = calcularPuntuacion();

    if (
        puntuacion > stats.mejorPuntuacion
    ) {

        stats.mejorPuntuacion = puntuacion;

    }


    guardarEstadisticas(stats);

}


// =========================================
// CALCULAR PUNTUACIÓN
// =========================================

function calcularPuntuacion() {

    let puntos = 1000;

    puntos -= partidaActual.preguntas * 10;

    puntos -= partidaActual.errores * 25;

    puntos -= tiempo * 2;


    if (puntos < 0) {

        puntos = 0;

    }


    return puntos;

}