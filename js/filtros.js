// =========================================
// ¿QUIÉN ES ESE POKÉMON? V3.1
// FILTROS
// =========================================


// ==============================
// FILTRAR TIPO
// ==============================

function filtrarTipo(tipo) {

    const respuesta =
        partidaActual.pokemonSecreto.tipo.includes(tipo);

    aplicarFiltro(

        pokemon => pokemon.tipo.includes(tipo) === respuesta

    );

    mostrarRespuesta(

        `¿Es tipo ${tipo}? ${respuesta ? "✅ Sí" : "❌ No"}`

    );

}


// ==============================
// FILTRAR CATEGORÍA
// ==============================

function filtrarCategoria(propiedad, nombre) {

    const respuesta =
        partidaActual.pokemonSecreto[propiedad];

    aplicarFiltro(

        pokemon => pokemon[propiedad] === respuesta

    );

    mostrarRespuesta(

        `¿Es ${nombre}? ${respuesta ? "✅ Sí" : "❌ No"}`

    );

}


// ==============================
// APLICAR FILTRO
// ==============================

function aplicarFiltro(condicion) {

    document

        .querySelectorAll(".pokemon-card")

        .forEach((carta, indice) => {

            const pokemon =
                partidaActual.pokemonTablero[indice];

            if (!condicion(pokemon)) {

                carta.classList.add("eliminado");

            }

        });

    actualizarContadorRestantes();

}