// =========================================
// ¿QUIÉN ES ESE POKÉMON?
// FILTROS V4 LIMPIO
// =========================================


// =========================================
// AUMENTAR PREGUNTA
// =========================================

function aumentarPregunta() {

    if (partidaActual.preguntas >= MAX_PREGUNTAS) {

        alert("❓ Llegaste al límite de preguntas");
        return false;

    }


    partidaActual.preguntas++;

    actualizarContadorPreguntas();

    return true;

}



// =========================================
// FILTRO TIPO
// =========================================

function filtrarTipo(tipo) {

    if (!aumentarPregunta())
        return;


    const secreto =
        partidaActual.pokemonSecreto.tipos.includes(tipo);



    eliminarSegunCondicion(

        pokemon =>
            pokemon.tipos.includes(tipo) === secreto

    );


    mostrarRespuesta(
        `¿Es tipo ${tipo}? ${secreto ? "✅ Sí" : "❌ No"}`
    );

}



// =========================================
// FILTRO CARACTERÍSTICAS
// =========================================

function preguntarCaracteristica(propiedad, nombre) {

    console.log("FILTRO NUEVO CARGADO", propiedad);

    if (!aumentarPregunta())
        return;



    const secreto =
        Boolean(
            partidaActual.pokemonSecreto[propiedad]
        );

    console.log("SECRETO:", partidaActual.pokemonSecreto.nombre);
    console.log("PROPIEDAD:", propiedad);
    console.log("VALOR SECRETO:", secreto);

    console.log(
        "TABLERO:",
        partidaActual.pokemonTablero.length
    );


    console.log(
        "Característica:",
        propiedad,
        secreto
    );



    eliminarSegunCondicion(

        pokemon =>
            Boolean(
                pokemon[propiedad]
            ) === secreto

    );



    mostrarRespuesta(
        `¿Es ${nombre}? ${secreto ? "✅ Sí" : "❌ No"}`
    );


}



// =========================================
// FILTRO GENERACIÓN
// =========================================

function filtrarGeneracion(generacion) {


    if (!aumentarPregunta())
        return;


    console.log("GENERACION PREGUNTADA:", generacion);

    console.log(
        "POKEMON SECRETO:",
        partidaActual.pokemonSecreto.nombre,
        "GEN:",
        partidaActual.pokemonSecreto.generacion
    );


    eliminarSegunCondicion(

        pokemon => {

            console.log(
                pokemon.nombre,
                "GEN:",
                pokemon.generacion
            );

            return pokemon.generacion !== generacion;

        }

    );


    mostrarRespuesta(
        `¿Es generación ${generacion}?`
    );

}


// =========================================
// FILTRO COLOR
// =========================================

function filtrarColor(color) {


    if (!aumentarPregunta())
        return;



    const secreto =
        partidaActual.pokemonSecreto.color === color;



    eliminarSegunCondicion(

        pokemon =>
            pokemon.color === color

    );



    mostrarRespuesta(
        `¿Es color ${color}? ${secreto ? "✅ Sí" : "❌ No"}`
    );


}




// =========================================
// MOTOR CENTRAL
// =========================================

function eliminarSegunCondicion(condicion) {


    const cartas =
        document.querySelectorAll(
            ".pokemon-card"
        );



    cartas.forEach(

        (carta, index) => {


            const id =
                Number(carta.dataset.id);


            const pokemon =
                partidaActual.pokemonTablero.find(
                    p => p.id === id
                );


            if (!pokemon)
                return;



            const mantener =
                condicion(pokemon);



            console.log(
                pokemon.nombre,
                mantener
            );



            if (!mantener) {

                carta.classList.add(
                    "eliminado"
                );

            }


        }

    );


    actualizarContadorRestantes();

}




// =========================================
// CONTADOR PREGUNTAS
// =========================================

function actualizarContadorPreguntas() {


    const contador =
        document.getElementById(
            "preguntas"
        );


    if (contador) {

        contador.textContent =
            partidaActual.preguntas;

    }

}