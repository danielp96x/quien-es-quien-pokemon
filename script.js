const tablero = document.getElementById("tablero");
const botonNueva = document.getElementById("nuevaPartida");
const estado = document.getElementById("estado");

let pokemonSecreto = null;

function mostrarPokemon() {
    tablero.innerHTML = "";

    pokemon.forEach((poke) => {
        const carta = document.createElement("div");
        carta.className = "carta";

        carta.innerHTML = `
            <img src="${poke.imagen}" alt="${poke.nombre}">
            <h3>${poke.nombre}</h3>
            <p>${poke.tipo.join(" / ")}</p>
        `;

        tablero.appendChild(carta);
    });
}

botonNueva.addEventListener("click", () => {
    const indice = Math.floor(Math.random() * pokemon.length);
    pokemonSecreto = pokemon[indice];

    estado.textContent = `🎮 Partida iniciada. Se eligió un Pokémon secreto entre ${pokemon.length} Pokémon.`;
});

mostrarPokemon();
