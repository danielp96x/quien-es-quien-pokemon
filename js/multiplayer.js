console.log("🎮 Multiplayer cargado");


let partidaMulti = {

    sala:null,

    jugador:null,

    rival:null,

    turno:null,

    pokemonSecreto:null

};



function crearSala(){

    const codigo =
    Math.random()
    .toString(36)
    .substring(2,7)
    .toUpperCase();


    partidaMulti.sala = codigo;


    alert(
        "🎮 Sala creada\nCódigo: " + codigo
    );


    console.log(
        "Sala:",
        codigo
    );

}



function unirseSala(){

    let codigo =
    prompt(
        "Introduce código de sala:"
    );


    if(!codigo){
        return;
    }


    partidaMulti.sala =
    codigo.toUpperCase();


    alert(
        "🔑 Unido a sala: "
        + partidaMulti.sala
    );


    console.log(
        "Sala unida:",
        partidaMulti.sala
    );

}