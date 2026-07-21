// =========================================
// GENERADOR AUTOMÁTICO POKÉDEX
// =========================================


let pokedexCompleta = [];


async function cargarPokedex(){
    let pokedexLista = false;


    console.log("📚 Cargando Pokédex...");


    for(let i = 1; i <= 1025; i++){


        let respuesta =
        await fetch(
        `https://pokeapi.co/api/v2/pokemon/${i}`
        );


        let data =
        await respuesta.json();



        let pokemon = {


            id:data.id,


            nombre:
            data.name
            .charAt(0)
            .toUpperCase()
            +
            data.name.slice(1),



            tipo:
            data.types.map(
                t =>
                traducirTipo(t.type.name)
            ),



            imagen:
            data.sprites.front_default,



            generacion:
            obtenerGeneracion(data.id),



           legendario: esLegendario(data.id),

mitico: esMitico(data.id),

pseudo: esPseudo(data.id),

inicial: esInicial(data.id),

ultraente: esUltraente(data.id),

paradoja: esParadoja(data.id),

eevee: esEevee(data.id),

alas:false,

            color:""

        };



        pokedexCompleta.push(
            pokemon
        );


    }


    console.log(
        "Pokémon cargados:",
        pokedexCompleta.length
    );
    pokedexLista = true;

console.log("✅ Pokédex lista");


}

function obtenerGeneracion(id){


if(id<=151)return 1;

if(id<=251)return 2;

if(id<=386)return 3;

if(id<=493)return 4;

if(id<=649)return 5;

if(id<=721)return 6;

if(id<=809)return 7;

if(id<=905)return 8;

return 9;


}



function traducirTipo(tipo){


let tipos={

normal:"Normal",
fire:"Fuego",
water:"Agua",
grass:"Planta",
electric:"Eléctrico",
ice:"Hielo",
fighting:"Lucha",
poison:"Veneno",
ground:"Tierra",
flying:"Volador",
psychic:"Psíquico",
bug:"Bicho",
rock:"Roca",
ghost:"Fantasma",
dragon:"Dragón",
dark:"Siniestro",
steel:"Acero",
fairy:"Hada"

};


return tipos[tipo] || tipo;


}

cargarPokedex();

// =========================================
// CATEGORÍAS POKÉMON
// =========================================



function esLegendario(id){


return [

144,145,146,
150,
243,244,245,
249,250,
377,378,379,
380,381,382,383,384,
480,481,482,
483,484,485,486,487,488,
638,639,640,
641,642,643,644,645,
646,
716,717,718,
785,786,787,788,
791,792,
800,
888,889,
890,
891,892

].includes(id);


}



function esMitico(id){


return [

151,251,
385,386,
489,490,491,492,493,
494,
647,648,649,
719,720,721,
801,802,
807,808,809

].includes(id);


}



function esPseudo(id){


return [

149,248,373,376,
445,635,
706,
784

].includes(id);


}



function esInicial(id){


return [

1,4,7,
152,155,158,
252,255,258,
387,390,393,
495,498,501,
650,653,656,
722,725,728,
810,813,816

].includes(id);


}



function esUltraente(id){


return [

793,794,795,796,797,
798,799,803,804,
805,806

].includes(id);


}



function esParadoja(id){


return [

984,985,986,987,988,989,
990,991,992,993,994,
995,996,997,998

].includes(id);


}



function esEevee(id){


return [

133,134,135,136,
196,197,470,471,
700

].includes(id);


}