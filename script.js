const tablero = document.getElementById("tablero");

function mostrarPokemon() {
    tablero.innerHTML = "";

    pokemon.forEach(poke => {
        tablero.innerHTML += `
            <div class="carta">
                <img src="${poke.imagen}" alt="${poke.nombre}">
                <h3>${poke.nombre}</h3>
                <p>${poke.tipo.join(" / ")}</p>
            </div>
        `;
    });
}

mostrarPokemon();
