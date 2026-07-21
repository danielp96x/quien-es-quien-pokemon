// =========================================
// ¿QUIÉN ES ESE POKÉMON? V3.0
// Archivo principal
// =========================================


document.addEventListener("DOMContentLoaded", () => {

    console.log("🎮 ¿Quién es ese Pokémon? V3.0 iniciado");

    setTimeout(()=>{

console.log(
"Pokémon disponibles:",
typeof pokedexCompleta !== "undefined"
?
pokedexCompleta.length
:
"base prueba"
);

},3000);

    const botonNuevaPartida =
        document.getElementById("nuevaPartida");


    botonNuevaPartida.addEventListener("click", () => {

        nuevaPartida();

        mostrarTablero();

    });


});