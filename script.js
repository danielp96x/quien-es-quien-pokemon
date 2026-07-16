const tablero = document.getElementById("tablero");
const botonNueva = document.getElementById("nuevaPartida");
const estado = document.getElementById("estado");

function mostrarPokemon() {
    tablero.innerHTML = "";

    pokemon.forEach((poke) => {
        tablero.innerHTML += `
            <div class="carta">
                <img src="${poke.imagen}">
                <h3>${poke.nombre}</h3>
            </div>
        `;
    });
}

botonNueva.onclick = function () {
    estado.innerHTML = "🎉 ¡El botón funciona!";
};

mostrarPokemon();
