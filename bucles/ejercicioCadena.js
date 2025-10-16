ejecutarPrueba1=function(){
    let mensaje;
    mensaje=recuperarTexto("txtCadena");
    recorrerCadena(mensaje);
}
ejecutarPrueba2=function(){
     let mensaje;
      mensaje=recuperarTexto("txtCadena");
    let invertir= invertirCadena(mensaje);
    invertir=mostrarTexto("lblInvertida",invertir );
    
}

invertirCadena=function(cadena){
    let resultado =" ";
   // let cadena;
    for(let posicion=cadena.length;posicion>=0;posicion--){
        resultado=resultado+cadena.charAt(posicion);
        
    }
    return resultado;
}
recorrerCadena=function(cadena){
    //0123456
    //Juanito
    let caracter;
    for(let posicion=0;posicion<cadena.length;posicion++){
        caracter=cadena.charAt(posicion);
        console.log("Caracter "+ caracter + "posicion " + posicion);
    
    }

     for(let posicion=0;posicion<=cadena.length-1;posicion++){
        caracter=cadena.charAt(posicion);
        console.log("CARACTER "+ caracter + "posicion " + posicion);

    }
}
buscarCadena=function(cadena,letra){
    let letraIterada;
    let existeLetra =false;
    for(let i=0;i<cadena.length;i++){
            letraIterada = cadena.length.charAt(i);
            if(letraIterada==letra){
                    existeLetra=true;
            }
    }
    if(existeLetra=true){
       return true;
    }else{
        return false;
    }
}
/*contarMayusculas=function(cadena){
    let letra;
    let contadorMayusculas;
    for(let i=0;i<cadena.length;i++){
        letra = cadena.length.charAt(i);
        if(esMayuscula(letra)){
            contadorMayusculas++;

        }
        console.log(contadorMayusculas);
    }
}*/