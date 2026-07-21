// =========================================
// ¿QUIÉN ES ESE POKÉMON? V3.0
// Base expandible Pokémon
// =========================================


function sprite(id){

    return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;

}


const pokemonData = [

{
id:1,
nombre:"Bulbasaur",
tipo:["Planta","Veneno"],
generacion:1,
color:"Verde",
legendario:false,
mitico:false,
pseudo:false,
alas:false,
imagen:sprite(1)
},

{
id:4,
nombre:"Charmander",
tipo:["Fuego"],
generacion:1,
color:"Rojo",
legendario:false,
mitico:false,
pseudo:false,
alas:false,
imagen:sprite(4)
},

{
id:7,
nombre:"Squirtle",
tipo:["Agua"],
generacion:1,
color:"Azul",
legendario:false,
mitico:false,
pseudo:false,
alas:false,
imagen:sprite(7)
},

{
id:25,
nombre:"Pikachu",
tipo:["Eléctrico"],
generacion:1,
color:"Amarillo",
legendario:false,
mitico:false,
pseudo:false,
alas:false,
imagen:sprite(25)
},

{
id:94,
nombre:"Gengar",
tipo:["Fantasma","Veneno"],
generacion:1,
color:"Morado",
legendario:false,
mitico:false,
pseudo:false,
alas:false,
imagen:sprite(94)
},

{
id:131,
nombre:"Lapras",
tipo:["Agua","Hielo"],
generacion:1,
color:"Azul",
legendario:false,
mitico:false,
pseudo:false,
alas:false,
imagen:sprite(131)
},

{
id:143,
nombre:"Snorlax",
tipo:["Normal"],
generacion:1,
color:"Azul",
legendario:false,
mitico:false,
pseudo:false,
alas:false,
imagen:sprite(143)
},

{
id:149,
nombre:"Dragonite",
tipo:["Dragón","Volador"],
generacion:1,
color:"Naranja",
legendario:false,
mitico:false,
pseudo:true,
alas:true,
imagen:sprite(149)
},

{
id:150,
nombre:"Mewtwo",
tipo:["Psíquico"],
generacion:1,
color:"Morado",
legendario:true,
mitico:false,
pseudo:false,
alas:false,
imagen:sprite(150)
},

{
id:151,
nombre:"Mew",
tipo:["Psíquico"],
generacion:1,
color:"Rosa",
legendario:false,
mitico:true,
pseudo:false,
alas:false,
imagen:sprite(151)
},


{
id:249,
nombre:"Lugia",
tipo:["Psíquico","Volador"],
generacion:2,
color:"Blanco",
legendario:true,
mitico:false,
pseudo:false,
alas:true,
imagen:sprite(249)
},

{
id:250,
nombre:"Ho-Oh",
tipo:["Fuego","Volador"],
generacion:2,
color:"Rojo",
legendario:true,
mitico:false,
pseudo:false,
alas:true,
imagen:sprite(250)
},


{
id:384,
nombre:"Rayquaza",
tipo:["Dragón","Volador"],
generacion:3,
color:"Verde",
legendario:true,
mitico:false,
pseudo:false,
alas:true,
imagen:sprite(384)
},


{
id:448,
nombre:"Lucario",
tipo:["Lucha","Acero"],
generacion:4,
color:"Azul",
legendario:false,
mitico:false,
pseudo:false,
alas:false,
imagen:sprite(448)
},


{
id:483,
nombre:"Dialga",
tipo:["Acero","Dragón"],
generacion:4,
color:"Azul",
legendario:true,
mitico:false,
pseudo:false,
alas:false,
imagen:sprite(483)
},


{
id:487,
nombre:"Giratina",
tipo:["Fantasma","Dragón"],
generacion:4,
color:"Negro",
legendario:true,
mitico:false,
pseudo:false,
alas:true,
imagen:sprite(487)
},


{
id:658,
nombre:"Greninja",
tipo:["Agua","Siniestro"],
generacion:6,
color:"Azul",
legendario:false,
mitico:false,
pseudo:false,
alas:false,
imagen:sprite(658)
},


{
id:700,
nombre:"Sylveon",
tipo:["Hada"],
generacion:6,
color:"Rosa",
legendario:false,
mitico:false,
pseudo:false,
alas:false,
imagen:sprite(700)
},


{
id:888,
nombre:"Zacian",
tipo:["Hada"],
generacion:8,
color:"Azul",
legendario:true,
mitico:false,
pseudo:false,
alas:false,
imagen:sprite(888)
},


{
id:1000,
nombre:"Gholdengo",
tipo:["Acero","Fantasma"],
generacion:9,
color:"Dorado",
legendario:false,
mitico:false,
pseudo:false,
alas:false,
imagen:sprite(1000)
}

];

console.log(
"Total Pokémon:",
pokemonData.length
);
