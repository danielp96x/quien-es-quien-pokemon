const tablero = document.getElementById("tablero");
const botonNueva = document.getElementById("nuevaPartida");
const estado = document.getElementById("estado");

let pokemonSecreto = null;

function mostrarPokemon() {
    tablero.innerHTML = "";

    pokemon.forEach((poke) => {
        tablero.innerHTML += `
            <div class="carta" data-id="${poke.id}">
                <img src="${poke.imagen}" alt="${poke.nombre}">
                <h3>${poke.nombre}</h3>
            </div>
        `;
    });
}

function iniciarPartida() {
    const indice = Math.floor(Math.random() * pokemon.length);
    pokemonSecreto = pokemon[indice];

    estado.textContent = "🎮 ¡Partida iniciada! Ya puedes hacer preguntas.";
}

botonNueva.addEventListener("click", iniciarPartida);

mostrarPokemon();
