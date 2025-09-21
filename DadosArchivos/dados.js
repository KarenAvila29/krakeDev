jugar=function(){
    let aleatorio;
    aleatorio=lanzarDado();
    cambiarTexto("lblNumero",aleatorio);
    if(aleatorio>3){
        let mensaje="ES MAYOR A 3 GANASTES";
        cambiarTexto("lblMensaje",mensaje);
       
    }else{
        let mensaje2="ES MENOR A 3 ESTAS DE MALAS";
        cambiarTexto("lblMensaje",mensaje2);
           }

}

//crear una funcion llamada lazarDado 
//no receibe parametros
//retorna un numero aleatorio entre 1-6
lanzarDado=function(){
    let aleatorio;
    let numeroMultiplicado;
    let numeroEntero;
    let valorDado;
    aleatorio=Math.random(); // entre 0 y 1
    numeroMultiplicado=aleatorio*6;
    
    numeroEntero=parseInt(numeroMultiplicado);// entre 0 y 5
    
    valorDado=numeroEntero+1;
    return valorDado;

}