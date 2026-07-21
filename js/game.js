// =========================================
// ¿QUIÉN ES ESE POKÉMON? V3.0
// Motor principal del juego
// =========================================

let tiempo = 0;
let reloj;
let partidaActual = {

    pokemonTablero: [],
    pokemonSecreto: null,
    preguntas: 0,
    errores: 0

};
// Filtros activos

let filtrosActivos = {

    tipos: [],

    legendario: null,

    mitico: null,

    pseudo: null,

    generacion: null

};

// Crear nueva partida

function nuevaPartida(){


if(
typeof pokedexLista !== "undefined" &&
!pokedexLista
){

    alert(
    "⏳ Espera, cargando Pokédex..."
    );

    return;

}


let modo =
document.getElementById("modoJuego").value;


console.log(
"Modo seleccionado:",
modo
);


console.log("🚀 Nueva partida creada");


    iniciarTiempo();

    console.log("Base Pokémon:", pokemonData);
    console.log("Cantidad Pokémon:", pokemonData.length);


    partidaActual.pokemonTablero = [];

    partidaActual.preguntas = 0;

    partidaActual.errores = 0;


  let baseJuego = pokemonData;


if(
typeof pokedexCompleta !== "undefined" &&
pokedexCompleta.length > 50
){

    baseJuego = pokedexCompleta;

}

console.log(
"Base seleccionada:",
baseJuego.length
);


if(modo==="gen1"){

baseJuego =
baseJuego.filter(
p=>p.generacion===1
);

}


if(modo==="gen2"){

baseJuego =
baseJuego.filter(
p=>p.generacion===2
);

}


if(modo==="gen3"){

baseJuego =
baseJuego.filter(
p=>p.generacion===3
);

}


if(modo==="legendarios"){

baseJuego =
baseJuego.filter(
p=>p.legendario
);

}
if(modo==="pseudo"){

baseJuego =
baseJuego.filter(
p=>p.pseudo
);

}


if(modo==="miticos"){

baseJuego =
baseJuego.filter(
p=>p.mitico
);

}


if(modo==="ultraentes"){

baseJuego =
baseJuego.filter(
p=>p.ultraente
);

}


if(modo==="paradojas"){

baseJuego =
baseJuego.filter(
p=>p.paradoja
);

}


if(modo==="eevee"){

baseJuego =
baseJuego.filter(
p=>p.eevee
);

}


if(modo==="iniciales"){

baseJuego =
baseJuego.filter(
p=>p.inicial
);

}

let mezcla =
[...baseJuego]
.sort(
()=>Math.random()-0.5
);


   // Crear tablero dinámico según categoría

let cantidadTablero = 30;


// Categorías especiales
if(modo==="pseudo"){
    cantidadTablero = baseJuego.length;
}

if(modo==="miticos"){
    cantidadTablero = baseJuego.length;
}

if(modo==="ultraentes"){
    cantidadTablero = baseJuego.length;
}

if(modo==="paradojas"){
    cantidadTablero = baseJuego.length;
}

if(modo==="eevee"){
    cantidadTablero = baseJuego.length;
}


// No superar los disponibles
cantidadTablero = Math.min(
    cantidadTablero,
    baseJuego.length
);


partidaActual.pokemonTablero =
mezcla.slice(0,cantidadTablero);

    console.log(
        "Pokémon en tablero:",
        partidaActual.pokemonTablero.length
    );
let contador =
document.getElementById("restantes");


if(contador){

    contador.innerHTML =
    partidaActual.pokemonTablero.length;

}

    if(partidaActual.pokemonTablero.length > 0){

        partidaActual.pokemonSecreto =
        partidaActual.pokemonTablero[
            Math.floor(
                Math.random() *
                partidaActual.pokemonTablero.length
            )
        ];


        console.log(
            "Pokémon secreto:",
            partidaActual.pokemonSecreto.nombre
        );

    }


    mostrarTablero();

}

function aplicarFiltrosAvanzados(){

let resultado =
partidaActual.pokemonTablero;


if(filtrosActivos.tipos.length > 0){

resultado =
resultado.filter(p=>{

return filtrosActivos.tipos.some(
tipo=>p.tipo.includes(tipo)
);

});

}


if(filtrosActivos.legendario !== null){

resultado =
resultado.filter(
p=>p.legendario === filtrosActivos.legendario
);

}


if(filtrosActivos.mitico !== null){

resultado =
resultado.filter(
p=>p.mitico === filtrosActivos.mitico
);

}


if(filtrosActivos.pseudo !== null){

resultado =
resultado.filter(
p=>p.pseudo === filtrosActivos.pseudo
);

}


if(filtrosActivos.generacion !== null){

resultado =
resultado.filter(
p=>p.generacion === filtrosActivos.generacion
);

}


return resultado;

}
function aplicarFiltrosTablero(){


document
.querySelectorAll(".pokemon-card")
.forEach((carta,index)=>{


let pokemon =
partidaActual.pokemonTablero[index];


let valido = true;


// TIPOS

if(filtrosActivos.tipos.length > 0){

valido =
filtrosActivos.tipos.some(
tipo=>pokemon.tipo.includes(tipo)
);

}


// LEGENDARIO

if(
valido &&
filtrosActivos.legendario !== null
){

valido =
pokemon.legendario === 
filtrosActivos.legendario;

}


// MITICO

if(
valido &&
filtrosActivos.mitico !== null
){

valido =
pokemon.mitico === 
filtrosActivos.mitico;

}


// PSEUDO

if(
valido &&
filtrosActivos.pseudo !== null
){

valido =
pokemon.pseudo ===
filtrosActivos.pseudo;

}



if(!valido){

carta.classList.add(
"eliminado"
);

}


});


}
// Mostrar tablero

function mostrarTablero(){

    const tablero =
    document.getElementById("tablero");


    tablero.innerHTML = "";


    partidaActual.pokemonTablero.forEach(pokemon => {


        const carta =
        document.createElement("div");


        carta.className =
        "pokemon-card oculta";


        carta.innerHTML = `

            <img src="${pokemon.imagen}">

            <h3>???</h3>

        `;


        carta.addEventListener("click", function(){

            comprobarPokemon(
                pokemon,
                carta
                
            );

        });


        tablero.appendChild(carta);


    });

}



// Revisar selección

function comprobarPokemon(pokemon,carta){

partidaActual.preguntas++; 


    if(
        pokemon.id === partidaActual.pokemonSecreto.id
    ){

        carta.style.boxShadow =
        "0 0 25px gold";
        
        carta.classList.add("ganador");
       mostrarVictoria(pokemon);


    }else{


        carta.classList.add("eliminado");

carta.innerHTML = `
    <div class="cruz">❌</div>
`;


        partidaActual.errores++;

    }

}


function iniciarTiempo(){

    clearInterval(reloj);

    tiempo = 0;

    reloj = setInterval(()=>{

        tiempo++;

        let contador =
        document.getElementById("tiempo");

        if(contador){

            contador.innerHTML =
            "⏱️ " + tiempo + "s";

        }

    },1000);

}

// =================================
// FILTROS
// =================================


function filtrarTipo(tipo){

    partidaActual.preguntas++;


    let secretoTieneTipo =
    partidaActual.pokemonSecreto.tipo.includes(tipo);



    document
    .querySelectorAll(".pokemon-card")
    .forEach((carta,index)=>{


        let pokemon =
        partidaActual.pokemonTablero[index];


        let tieneTipo =
        pokemon.tipo.includes(tipo);



        if(tieneTipo !== secretoTieneTipo){

            carta.classList.add(
                "eliminado"
            );

        }


    });


    mostrarRespuesta(
        "¿Es tipo " + tipo + "? " +
        (secretoTieneTipo ? "✅ SÍ" : "❌ NO")
    );


}


function filtrarCategoria(propiedad, nombre){


    partidaActual.preguntas++;


    let respuesta =
    partidaActual.pokemonSecreto[propiedad];


    document
    .querySelectorAll(".pokemon-card")
    .forEach((carta,index)=>{


        let pokemon =
        partidaActual.pokemonTablero[index];


        if(
            pokemon[propiedad] !== respuesta
        ){

            carta.classList.add(
                "eliminado"
            );

        }


    });


    mostrarRespuesta(
        "¿Es " + nombre + "? " +
        (respuesta ? "✅ SÍ" : "❌ NO")
    );


}
function filtrarLegendario(){

filtrarCategoria(
"legendario",
"Legendario"
);

}


function filtrarMitico(){

filtrarCategoria(
"mitico",
"Mítico"
);

}


function filtrarPseudo(){

filtrarCategoria(
"pseudo",
"Pseudolegendario"
);

}


function filtrarUltraente(){

filtrarCategoria(
"ultraente",
"Ultraente"
);

}


function filtrarParadoja(){

filtrarCategoria(
"paradoja",
"Paradoja"
);

}


function filtrarEevee(){

filtrarCategoria(
"eevee",
"Eeveelución"
);

}


function filtrarInicial(){
    function limpiarFiltros(){


document
.querySelectorAll(".pokemon-card")
.forEach(carta=>{


carta.classList.remove(
"eliminado"
);


});


partidaActual.preguntas = 0;


let contador =
document.getElementById("preguntas");


if(contador){

contador.innerHTML = "0";

}


mostrarRespuesta(
"🔄 Preguntas reiniciadas"
);


}

filtrarCategoria(
"inicial",
"Inicial"
);

}
aplicarFiltrosTablero();


    partidaActual.preguntas++;


    document.querySelectorAll(".pokemon-card")
    .forEach((carta,index)=>{


        let pokemon =
        partidaActual.pokemonTablero[index];


        if(!pokemon.legendario){


            carta.classList.add(
                "eliminado"
            );


        }


    });



function mostrarVictoria(pokemon){


    clearInterval(reloj);


    let ventana =
    document.createElement("div");


    ventana.className =
    "victoria";


    ventana.innerHTML = `

        <div class="caja-victoria">

            <h2>🎉 ¡Correcto!</h2>

            <img src="${pokemon.imagen}">

            <h3>${pokemon.nombre}</h3>

            <p>
            ⏱️ Tiempo: ${tiempo}s
            </p>

            <p>
            ❓ Preguntas: ${partidaActual.preguntas}
            </p>


            <button onclick="location.reload()">
            🔄 Nueva partida
            </button>


        </div>

    `;


    document.body.appendChild(ventana);

}

function filtrarMitico(){

function activarMiticos(){

filtrosActivos.mitico = true;

aplicarFiltrosTablero();

}
partidaActual.preguntas++;


let respuesta =
partidaActual.pokemonSecreto.mitico;


aplicarFiltro(
pokemon=>pokemon.mitico === respuesta
);


mostrarRespuesta(
"¿Es mítico?",
respuesta
);


}

function aplicarFiltro(condicion){


document
.querySelectorAll(".pokemon-card")
.forEach((carta,index)=>{


let pokemon =
partidaActual.pokemonTablero[index];


if(!condicion(pokemon)){


carta.classList.add(
"eliminado"
);

actualizarRestantes();
}


});


}

function preguntaLibre(){


let texto =
document
.getElementById("pregunta")
.value
.toLowerCase();



partidaActual.preguntas++;



let secreto =
partidaActual.pokemonSecreto;



let respuesta;



let filtro;



// COLOR

if(texto.includes("rojo")){

respuesta =
secreto.color==="Rojo";

filtro =
p=>p.color==="Rojo";

}


else if(texto.includes("azul")){

respuesta =
secreto.color==="Azul";

filtro =
p=>p.color==="Azul";

}


else if(texto.includes("verde")){

respuesta =
secreto.color==="Verde";

filtro =
p=>p.color==="Verde";

}



// GENERACIÓN

else if(texto.includes("generación") ||
texto.includes("generacion")){


let numero =
texto.match(/\d+/);


if(numero){

respuesta =
secreto.generacion ==
Number(numero[0]);


filtro =
p=>p.generacion ==
Number(numero[0]);

}

}



// TIPOS

else if(
texto.includes("fuego") ||
texto.includes("agua") ||
texto.includes("planta") ||
texto.includes("dragón") ||
texto.includes("dragon") ||
texto.includes("eléctrico") ||
texto.includes("electrico")
){


let tipoDetectado;


if(texto.includes("fuego"))
tipoDetectado="Fuego";

if(texto.includes("agua"))
tipoDetectado="Agua";

if(texto.includes("planta"))
tipoDetectado="Planta";

if(texto.includes("dragon"))
tipoDetectado="Dragón";

if(texto.includes("eléctrico") ||
texto.includes("electrico"))
tipoDetectado="Eléctrico";


respuesta =
secreto.tipo.includes(tipoDetectado);


filtro =
p=>p.tipo.includes(tipoDetectado);


}



// DOBLE TIPO

else if(
texto.includes("dos tipos") ||
texto.includes("doble")
){


respuesta =
secreto.tipo.length>1;


filtro =
p=>p.tipo.length>1;


}



// PSEUDO

else if(
texto.includes("pseudo")
){


respuesta =
secreto.pseudo;


filtro =
p=>p.pseudo;


}



else{


mostrarRespuesta(
"❓ No entiendo esa pregunta"
);


return;


}



aplicarFiltro(filtro);



mostrarRespuesta(

respuesta ?

"✅ Sí"

:

"❌ No"

);


}



function limpiarFiltros(){


    document
    .querySelectorAll(".pokemon-card")
    .forEach(carta=>{


        carta.classList.remove(
            "eliminado"
        );


    });


    partidaActual.preguntas = 0;


    let contador =
    document.getElementById("preguntas");


    if(contador){

        contador.innerHTML = "0";

    }


    let restantes =
    document.getElementById("restantes");


    if(restantes){

        restantes.innerHTML =
        partidaActual.pokemonTablero.length;

    }


    mostrarRespuesta(
        "🔄 Preguntas reiniciadas"
    );


}

function mostrarRespuesta(texto){

let caja =
document.getElementById("respuesta");


if(caja){

caja.innerHTML=texto;

}

}

