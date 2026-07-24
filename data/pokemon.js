// =========================================
// POKEDEX PRINCIPAL V3.2
// =========================================

// Unimos todas las generaciones y normalizamos
// el formato de cada Pokémon.

const pokedexCompleta = [

    ...pokemonGen1,
    ...pokemonGen2,
    ...pokemonGen3,
    ...pokemonGen4,
    ...pokemonGen5,
    ...pokemonGen6,
    ...pokemonGen7,
    ...pokemonGen8,
    ...pokemonGen9

].map(pokemon => ({

    id: pokemon.id,

    nombre: pokemon.nombre,

    imagen: pokemon.imagen,

    generacion: pokemon.generacion,

    // Compatibilidad entre "tipo" y "tipos"
    tipos:
        pokemon.tipos ||
        pokemon.tipo ||
        [],

    // Compatibilidad del color
    color:
        pokemon.color ||
        "Desconocido",

    // Características
    legendario:
        pokemon.legendario ?? false,

    mitico:
        pokemon.mitico ?? false,

    pseudo:
        pokemon.pseudo ?? false,

    inicial:
        pokemon.inicial ?? false,

    ultraente:
        pokemon.ultraente ?? false,

    paradoja:
        pokemon.paradoja ?? false,

    eevee:
        pokemon.eevee ?? false

}));


// =========================================
// INFORMACIÓN
// =========================================

console.log("Gen1:", pokemonGen1.length);
console.log("Gen2:", pokemonGen2.length);
console.log("Gen3:", pokemonGen3.length);
console.log("Gen4:", pokemonGen4.length);
console.log("Gen5:", pokemonGen5.length);
console.log("Gen6:", pokemonGen6.length);
console.log("Gen7:", pokemonGen7.length);
console.log("Gen8:", pokemonGen8.length);
console.log("Gen9:", pokemonGen9.length);

console.log("Total:", pokedexCompleta.length);


// Variable global

window.pokemonData = pokedexCompleta;


console.log(
    `📚 Pokédex cargada correctamente: ${pokemonData.length} Pokémon`
);
console.log("PRUEBA LEGENDARIOS:");
console.log(
    pokedexCompleta.filter(
        p => p.legendario === true
    )
);

console.log("PRUEBA INICIALES:");
console.log(
    pokedexCompleta.filter(
        p => p.inicial === true
    )
);