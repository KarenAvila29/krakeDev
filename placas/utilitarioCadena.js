esMayuscula=function(caracter){
    let codigoLetra=caracter.charCodeAt(caracter);
  //  letra=caracter.charAt(1);
 // console.log(codigoLetra);
  if(codigoLetra>=65 && codigoLetra<=90 /*|| codigoLetra==209*/){  
   // let errores=mostrarTexto("lblErrores". " es una letra mayuscula");
     return true;
    }
else{
    return false;
}
}

esDigito=function(caracter){
    let letra=false;
    let codigoLetra=caracter.charCodeAt();
  //  letra=caracter.charAt(1);
  if(codigoLetra>=48 && codigoLetra<=57){  
     return true;
    }
else{
    return false;
}
}
esGuion=function(caracter){
    let letra=false;
    let codigoLetra=caracter.charCodeAt();
  //  letra=caracter.charAt(1);
  if(codigoLetra==45){  
        return true;
    }
else{
    return false;
}
}