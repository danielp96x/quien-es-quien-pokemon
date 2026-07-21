// =========================================
// ¿QUIÉN ES ESE POKÉMON? V3.0
// Base Pokémon preparada para filtros
// =========================================


// Generador automático de imágenes

function sprite(id){

    return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;

}



// Base de datos Pokémon

const pokemonData = [


{
    id:1,
    nombre:"Bulbasaur",
    tipo:["Planta","Veneno"],
    generacion:1,
    color:"Verde",
    alas:false,
    legendario:false,
    mitico:false,
    pseudo:false,
    imagen:sprite(1)
},


{
    id:4,
    nombre:"Charmander",
    tipo:["Fuego"],
    generacion:1,
    color:"Rojo",
    alas:false,
    legendario:false,
    mitico:false,
    pseudo:false,
    imagen:sprite(4)
},


{
    id:7,
    nombre:"Squirtle",
    tipo:["Agua"],
    generacion:1,
    color:"Azul",
    alas:false,
    legendario:false,
    mitico:false,
    pseudo:false,
    imagen:sprite(7)
},


{
    id:25,
    nombre:"Pikachu",
    tipo:["Eléctrico"],
    generacion:1,
    color:"Amarillo",
    alas:false,
    legendario:false,
    mitico:false,
    pseudo:false,
    imagen:sprite(25)
},


{
    id:39,
    nombre:"Jigglypuff",
    tipo:["Normal","Hada"],
    generacion:1,
    color:"Rosa",
    alas:false,
    legendario:false,
    mitico:false,
    pseudo:false,
    imagen:sprite(39)
},


{
    id:52,
    nombre:"Meowth",
    tipo:["Normal"],
    generacion:1,
    color:"Amarillo",
    alas:false,
    legendario:false,
    mitico:false,
    pseudo:false,
    imagen:sprite(52)
},


{
    id:133,
    nombre:"Eevee",
    tipo:["Normal"],
    generacion:1,
    color:"Marrón",
    alas:false,
    legendario:false,
    mitico:false,
    pseudo:false,
    imagen:sprite(133)
},


{
    id:150,
    nombre:"Mewtwo",
    tipo:["Psíquico"],
    generacion:1,
    color:"Morado",
    alas:false,
    legendario:true,
    mitico:false,
    pseudo:false,
    imagen:sprite(150)
},


{
    id:249,
    nombre:"Lugia",
    tipo:["Psíquico","Volador"],
    generacion:2,
    color:"Blanco",
    alas:true,
    legendario:true,
    mitico:false,
    pseudo:false,
    imagen:sprite(249)
},


{
    id:658,
    nombre:"Greninja",
    tipo:["Agua","Siniestro"],
    generacion:6,
    color:"Azul",
    alas:false,
    legendario:false,
    mitico:false,
    pseudo:false,
    imagen:sprite(658)
}


];
