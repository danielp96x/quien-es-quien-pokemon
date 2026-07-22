// =========================================
// ¿QUIÉN ES ESE POKÉMON? V3.1
// INTERFAZ
// =========================================


// ==============================
// RESPUESTAS
// ==============================

function mostrarRespuesta(texto) {

    const respuesta = document.getElementById("respuesta");

    if (!respuesta) return;

    respuesta.textContent = texto;

}


// ==============================
// MENSAJE SOBRE CARTA
// ==============================

function mostrarMensajeCarta(carta, mensaje) {

    const overlay = carta.querySelector(".pokemon-overlay");

    if (!overlay) return;

    overlay.textContent = mensaje;

    overlay.classList.add("mostrar");

    setTimeout(() => {

        overlay.classList.remove("mostrar");

    }, 1500);

}


// ==============================
// VENTANA DE VICTORIA
// ==============================

function mostrarVictoria(pokemon) {

    detenerTiempo();

    const ventana = document.createElement("div");

    ventana.className = "victoria";

    ventana.innerHTML = `

        <div class="caja-victoria">

            <h2>🎉 ¡Correcto!</h2>

            <img src="${pokemon.imagen}">

            <h3>${pokemon.nombre}</h3>

            <p>⏱️ ${tiempo} segundos</p>

            <p>❓ ${partidaActual.preguntas} preguntas</p>

            <button onclick="location.reload()">

                Nueva partida

            </button>

        </div>

    `;

    document.body.appendChild(ventana);

}


// =========================================
// CREAR PANEL DE PREGUNTAS
// =========================================

function crearPanelPreguntas(modo) {

    const panel = document.getElementById("panelPreguntas");

    if (!panel) return;

    panel.innerHTML = "";

    // Siempre cargamos las preguntas generales
    let preguntas = [...preguntasGenerales];

    switch (modo) {

        case "legendarios":
            preguntas.push(...preguntasLegendarios);
            break;

        case "miticos":
            preguntas.push(...preguntasMiticos);
            break;

        case "pseudo":
            preguntas.push(...preguntasPseudo);
            break;

        case "paradojas":
            preguntas.push(...preguntasParadojas);
            break;

        case "eevee":
            preguntas.push(...preguntasEevee);
            break;

        case "iniciales":
            preguntas.push(...preguntasIniciales);
            break;

    }

    preguntas.forEach(pergunta => {

        const boton = document.createElement("button");

        boton.textContent = pergunta.texto;

        boton.addEventListener("click", pergunta.accion);

        panel.appendChild(boton);

    });

}
