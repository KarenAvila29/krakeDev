let puntosUsuario=0;
let puntosComputador=0;

jugar=function(seleccionado){
    let elemento=generarElemento();
   generarRuta(elemento);
    
    let ganador=determinarGanador(seleccionado,elemento);
    if(ganador==0){
             mostrarTexto("lblGanador", "EMPATE");
    }else if(ganador==1){
             mostrarTexto("lblGanador", "GANASTES LA PARTIDA");
            puntosUsuario=puntosUsuario+1;
             mostrarTexto("lblPuntaje", puntosUsuario);
            } if(puntosUsuario==5){
                mostrarTexto("lblGanador", " ");
                mostrarTexto("lblContador", "HAS GANADO EL JUEGO");
             }
    else if(ganador==2){
             mostrarTexto("lblGanador", "PERDISTE LA PARTIDA");
            puntosComputador=puntosComputador+1;
              mostrarTexto("lblPuntaje2", puntosComputador);
            } if(puntosComputador==5){
                 mostrarTexto("lblGanador", " ");
             mostrarTexto("lblContador", "EL COMPUTADOR TE HA VENCIDO");
                }
    }

limpiar=function(){
        mostrarTexto("lblGanador", " ");
        mostrarTexto("lblPuntaje", " ");
        mostrarTexto("lblPuntaje2", " ");
        mostrarTexto("lblContador", " ");
        mostrarImagen("imgJuego"," ");
        puntosComputador=0;
        puntosUsuario=0;
}
