const tablero = document.getElementById("tablero");
const botonNueva = document.getElementById("nuevaPartida");
const estado = document.getElementById("estado");

function mostrarPokemon() {
    tablero.innerHTML = "";

    for (let i = 0; i < pokemon.length; i++) {
        const poke = pokemon[i];

        const carta = document.createElement("div");
        carta.className = "carta";

        carta.innerHTML = `
            <img src="${poke.imagen}" alt="${poke.nombre}">
            <h3>${poke.nombre}</h3>
            <p>${poke.tipo.join(" / ")}</p>
        `;

        tablero.appendChild(carta);
    }
}

mostrarPokemon();

botonNueva.onclick = function () {
    estado.textContent = "FUNCIONA";
};
