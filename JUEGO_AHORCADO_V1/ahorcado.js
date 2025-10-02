//No se olvide de respirar, mantenga la calma y demuestre lo que sabe
guardarPalabra=function(){
   let palabra= recuperarTexto("txtSecreta");
   if((esMayuscula(palabra)==false)){
        alert(" DEBE INGRESAR UNA PALABRA MAYUSCULA");
   }

}


esMayuscula=function(caracter){
    let codigoLetra=caracter.charCodeAt(caracter);
    if(codigoLetra>=65 && codigoLetra<=90 /*|| codigoLetra==209*/){  
        return true;
    }else{
        return false;
    }
}