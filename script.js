alert("Script cargado correctamente");

const tablero = document.getElementById("tablero");
const botonNueva = document.getElementById("nuevaPartida");
const estado = document.getElementById("estado");

function mostrarPokemon() {
    tablero.innerHTML = "";

    pokemon.forEach((poke) => {
        tablero.innerHTML += `
            <div class="carta">
                <img src="${poke.imagen}" alt="${poke.nombre}">
                <h3>${poke.nombre}</h3>
            </div>
        `;
    });
}

botonNueva.addEventListener("click", () => {
    estado.textContent = "🎉 ¡El botón funciona!";
});

mostrarPokemon();
