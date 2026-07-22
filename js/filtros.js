// =========================================
// ¿QUIÉN ES ESE POKÉMON?
// FILTROS V3.1
// =========================================


// =========================================
// SUMAR PREGUNTA
// =========================================

function aumentarPregunta(){


    if(partidaActual.preguntas >= MAX_PREGUNTAS){

        alert(
            "❓ Llegaste al límite de preguntas"
        );

        return false;

    }


    partidaActual.preguntas++;

    actualizarContadorPreguntas();


    return true;

}



// =========================================
// FILTRAR TIPO
// =========================================

function filtrarTipo(tipo) {


    if(partidaActual.preguntas >= MAX_PREGUNTAS){

        alert("❌ No puedes hacer más preguntas");

        return;

    }


    aumentarPregunta();


    const respuesta =
        partidaActual.pokemonSecreto
        .tipos?.includes(tipo) || false;


    aplicarFiltro(

        pokemon =>
            pokemon.tipos?.includes(tipo) === respuesta

    );


    mostrarRespuesta(

        `¿Es tipo ${tipo}? ${respuesta ? "✅ Sí" : "❌ No"}`

    );

}
   
// =========================================
// FILTRAR CATEGORÍA
// =========================================

function filtrarCategoria(propiedad,nombre){


    if(!aumentarPregunta())
        return;



    const respuesta =
        partidaActual.pokemonSecreto[propiedad];



    aplicarFiltro(

        pokemon =>
            pokemon[propiedad] === respuesta

    );



    mostrarRespuesta(

        `¿Es ${nombre}?
        ${respuesta ? "✅ Sí" : "❌ No"}`

    );

}



// =========================================
// FILTRAR GENERACIÓN
// =========================================

function filtrarGeneracion(generacion){


    if(!aumentarPregunta())
        return;



    const respuesta =
        partidaActual.pokemonSecreto.generacion
        === generacion;



    aplicarFiltro(

        pokemon =>
            pokemon.generacion === generacion

    );



    mostrarRespuesta(

        `¿Es generación ${generacion}?
        ${respuesta ? "✅ Sí" : "❌ No"}`

    );

}



// =========================================
// FILTRAR COLOR
// =========================================

function filtrarColor(color){


    if(!aumentarPregunta())
        return;



    const respuesta =
        partidaActual.pokemonSecreto.color
        === color;



    aplicarFiltro(

        pokemon =>
            pokemon.color === color

    );



    mostrarRespuesta(

        `¿Es color ${color}?
        ${respuesta ? "✅ Sí" : "❌ No"}`

    );

}



// =========================================
// APLICAR FILTRO AL TABLERO
// =========================================

function aplicarFiltro(condicion){


    document
    .querySelectorAll(".pokemon-card")
    .forEach((carta,indice)=>{


        const pokemon =
            partidaActual.pokemonTablero[indice];


        if(
            pokemon &&
            !condicion(pokemon)
        ){

            carta.classList.add(
                "eliminado"
            );

        }


    });



    actualizarContadorRestantes();


}



// =========================================
// CONTADOR DE PREGUNTAS
// =========================================

function actualizarContadorPreguntas(){


    const contador =
        document.getElementById(
            "preguntas"
        );


    if(!contador)
        return;


    contador.textContent =
        partidaActual.preguntas;

}
function aumentarPregunta(){

    partidaActual.preguntas++;

    const contador =
        document.getElementById("preguntas");


    if(contador){

        contador.textContent =
            partidaActual.preguntas;

    }


    if(partidaActual.preguntas >= MAX_PREGUNTAS){

        alert(
        "❌ Llegaste al límite de preguntas"
        );

    }

}