//No se olvide de respirar, mantenga la calma y demuestre lo que sabe
let palabraSecreta;
guardarPalabra=function(){
    let resultado = true;
   let palabra= recuperarTexto("txtSecreta");
    if(palabra.length !==5){
        alert(" DEBE INGRESAR UNA PALABRA MAYUSCULA DE 5 LETRAS");
        return;
   }
    for(i=0;i<palabra.length;i++){
  
        let variable= palabra.charAt(i); 
        if(esMayuscula(variable)==false){
            resultado=false;
            break;
   }
}
   if(!resultado){
       alert(" DEBE INGRESAR UNA PALABRA MAYUSCULA DE 5 LETRAS");
      }  
   else{
        palabraSecreta=palabra;
   }
  }  
  guardarLetra=function(letra,posicion){
    if (posicion >= 0 && posicion <= 4) {
        let div = document.getElementById("div" + posicion);
        if (div) {
          div.textContent = letra;
        }
      }
  }
esMayuscula=function(caracter){
    let codigoLetra=caracter.charCodeAt(caracter);
    if(codigoLetra>=65 && codigoLetra<=90 ){  
        return true;
    }else{
        return false;
    }
}