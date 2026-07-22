// =========================================
// ¿QUIÉN ES ESE POKÉMON? V3.1
// SISTEMA DE TIEMPO
// =========================================

function iniciarTiempo() {

    clearInterval(reloj);

    tiempo = 0;

    actualizarTiempo();

    reloj = setInterval(() => {

        tiempo++;

        actualizarTiempo();

    }, 1000);

}

function detenerTiempo() {

    clearInterval(reloj);

}

function actualizarTiempo() {

    const contador = document.getElementById("tiempo");

    if (!contador) return;

    contador.textContent = tiempo + "s";

}