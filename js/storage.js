// =========================================
// ESTADÍSTICAS DEL JUEGO
// =========================================

const CLAVE_ESTADISTICAS = "pokemon_estadisticas";

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

function guardarEstadisticas(stats) {
    localStorage.setItem(
        CLAVE_ESTADISTICAS,
        JSON.stringify(stats)
    );
}

function registrarVictoria() {

    const stats = obtenerEstadisticas();

    stats.partidas++;
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

    if (puntuacion > stats.mejorPuntuacion) {
        stats.mejorPuntuacion = puntuacion;
    }

    guardarEstadisticas(stats);

}
// =========================================
// SISTEMA DE ESTADÍSTICAS
// =========================================


function obtenerEstadisticas(){

    let datos =
        localStorage.getItem(
            "pokemonStats"
        );


    if(!datos){

        datos = {

            partidas:0,
            victorias:0,
            mejorTiempo:null,
            mejorPuntuacion:0,
            preguntas:0,
            errores:0

        };

        localStorage.setItem(
            "pokemonStats",
            JSON.stringify(datos)
        );

    }
    else{

        datos = JSON.parse(datos);

    }


    return datos;

}



// =========================================
// REGISTRAR PARTIDA
// =========================================

function registrarPartida(){


    const stats =
        obtenerEstadisticas();


    stats.partidas++;


    localStorage.setItem(
        "pokemonStats",
        JSON.stringify(stats)
    );

}



// =========================================
// REGISTRAR VICTORIA
// =========================================

function registrarVictoria(){


    const stats =
        obtenerEstadisticas();


    stats.victorias++;


    stats.preguntas +=
        partidaActual.preguntas;


    stats.errores +=
        partidaActual.errores;



    localStorage.setItem(
        "pokemonStats",
        JSON.stringify(stats)
    );

}