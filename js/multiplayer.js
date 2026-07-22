console.log("🎮 Multiplayer V4 iniciado");

const socket = io();

let codigoSala = null;
let soyCreador = false;

// ===========================
// CREAR SALA
// ===========================

document
.getElementById("CrearSala")
.addEventListener("click", () => {

    soyCreador = true;

    socket.emit("crearSala");

});

// ===========================
// UNIRSE
// ===========================

document
.getElementById("btnUnirseSala")
.addEventListener("click", () => {

    const codigo =
        prompt("Código de la sala:");

    if(!codigo) return;

    soyCreador = false;

    socket.emit(
        "unirseSala",
        codigo.toUpperCase()
    );

});

// ===========================
// RESPUESTAS SERVIDOR
// ===========================

socket.on("salaCreada",(codigo)=>{

    codigoSala = codigo;

    alert(
        "🎮 Sala creada\n\nCódigo:\n"+codigo
    );

});

socket.on("unidoSala",(codigo)=>{

    codigoSala = codigo;

    alert(
        "✅ Unido a "+codigo
    );

});

socket.on("errorSala",(msg)=>{

    alert(msg);

});

// ===========================
// CUANDO YA HAY DOS JUGADORES
// ===========================

socket.on("dosJugadores",()=>{

    alert("👥 Ambos jugadores conectados");

});

// ===========================
// ENVIAR TABLERO
// ===========================

function enviarTablero(){

   socket.emit(
    "enviarTablero",
    {

        tablero:
        partidaActual.pokemonTablero

    }
);
}
// ===========================
// RECIBIR TABLERO
// ===========================

socket.on(
"recibirTablero",
(datos)=>{

    if(soyCreador)
        return;

    partidaActual.pokemonTablero =
        datos.tablero;



    mostrarTablero();

    crearPanelFiltros();

    actualizarContadores();

    console.log(
        "📦 Tablero recibido"
    );

});
// ===========================
// ELEGIR POKÉMON
// ===========================

function elegirPokemon(id){

    const pokemon =
        partidaActual.pokemonTablero.find(
            p => p.id === id
        );

    if(!pokemon) return;

    socket.emit(
        "elegirPokemon",
        pokemon
    );

    alert(
        "🎯 Elegiste: " +
        pokemon.nombre
    );

}

window.elegirPokemon = elegirPokemon;


// ===========================
// COMENZAR
// ===========================

socket.on(
"comenzarPartida",
()=>{

    alert(
        "🔥 ¡Empieza la partida!"
    );

});
socket.on(
"pokemonRival",
(pokemon)=>{


    console.log(
        "👀 Pokémon rival:",
        pokemon
    );


    partidaActual.pokemonSecreto =
        pokemon;


});
window.codigoSala = () => codigoSala;
window.elegirPokemon = elegirPokemon;
