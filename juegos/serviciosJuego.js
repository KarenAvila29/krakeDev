
obtenerAleatorio=function(){
      let aleatorio;
    let aleatorioMultiplicado;
    let aleatorioEntero;
    let valor;
    aleatorio=Math.random();
    aleatorioMultiplicado=aleatorio*3;
    aleatorioEntero=parseInt(aleatorioMultiplicado);
    valor=aleatorioEntero+1;
    return valor;
}
generarElemento=function( ){
    resultado=obtenerAleatorio();
     if(resultado == 1){
        return "PIEDRA";
    }else if(resultado == 2){
        return "PAPEL";
    }else if(resultado == 3){
        return "TIJERA";
    }
}
determinarGanador=function(eleccionJugador1,eleccionJugador2){
    if (eleccionJugador1 == eleccionJugador2) {
        return 0; // Empate
    }else if ((eleccionJugador1 == "PIEDRA" && eleccionJugador2 == "TIJERA") ||
     (eleccionJugador1 == "PAPEL" && eleccionJugador2 =="PIEDRA") || 
     (eleccionJugador1 == "TIJERA" && eleccionJugador2 == "PAPEL")) {
        return 1; // Gana Jugador 1
    }else{
         return 2;
    };
}
generarRuta=function(resultado){
      /*  resultado=generarElemento(nombre);*/
 if(resultado == "PIEDRA"){
       mostrarImagen("imgJuego","./imagenes/PIEDRA.png");
    }else if(resultado == "PAPEL"){
       mostrarImagen("imgJuego","./imagenes/PAPEL.png");
    }else if(resultado == "TIJERA"){
       mostrarImagen("imgJuego","./imagenes/TIJERA.png");
    }
}