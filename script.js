// =========================================
// ¿QUIÉN ES ESE POKÉMON? V3.x
// Archivo principal
// =========================================

document.addEventListener("DOMContentLoaded", iniciarJuego);

function iniciarJuego() {

    console.log("🎮 ¿Quién es ese Pokémon? V3.x iniciado");

    // Verificar que exista el botón
    const botonNuevaPartida = document.getElementById("nuevaPartida");

    if (!botonNuevaPartida) {
        console.error("❌ No se encontró el botón 'Nueva Partida'.");
        return;
    }

    // Evento del botón
    botonNuevaPartida.addEventListener("click", nuevaPartida);

    console.log("✅ Interfaz cargada correctamente.");
}