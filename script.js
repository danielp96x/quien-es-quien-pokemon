const tablero = document.getElementById("tablero");

function mostrarPokemon(){

    tablero.innerHTML = "";

    pokemon.forEach((poke)=>{

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

mostrarPokemon();
