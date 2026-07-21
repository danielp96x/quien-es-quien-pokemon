// =========================================
// ¿QUIÉN ES ESE POKÉMON? V3.0
// Archivo principal
// =========================================


document.addEventListener("DOMContentLoaded", () => {

    console.log("🎮 ¿Quién es ese Pokémon? V3.0 iniciado");


    const botonNuevaPartida =
        document.getElementById("nuevaPartida");


    botonNuevaPartida.addEventListener("click", () => {

        nuevaPartida();

        mostrarTablero();

    });


});