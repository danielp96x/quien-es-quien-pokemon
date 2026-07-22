// =========================================
// POKEDEX PRINCIPAL V3.1
// =========================================


// Unimos generaciones

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

];
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

// Variable global para el juego

window.pokemonData = pokedexCompleta;


console.log(
    `📚 Pokédex cargada correctamente: ${pokemonData.length} Pokémon`
);