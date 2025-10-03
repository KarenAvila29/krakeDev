//No se olvide de respirar, mantenga la calma y demuestre lo que sabe
let palabraSecreta;
let intentos=0;
let coincidencias=0;
let errores=0;
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
  ingresarLetra=function(){
    let letra1= recuperarTexto("txtLetra");
   
        if(esMayuscula(letra1)==true){
            let resultado=0;
            validar(letra1);
            coincidencias=coincidencias+1;
            if(coincidencias==5){
                   mostrarImagen("ahorcadoImagen","ganador.gif");
             }else{
                 intentos=intentos+1;
            if(intentos==10){
                   mostrarImagen("ahorcadoImagen","gameOver.gif");
            }}
         }else   
            {
            
             alert(" SOLO SE ACEPTAN MAYUSCULAS");
        }
  
  }
  mostrarLetra=function(letra,posicion){
    if (posicion >= 0 && posicion <= 4) {
        let div = document.getElementById("div" + posicion);
        if (div) {
          div.textContent = letra;
        }
      }
  }
  validar=function(letra){
    let letrasEncontradas=0;
     for (let i = 0; i < palabraSecreta.length; i++) {
        // Verifica si coincide con la letra que recibe como parámetro.
        if (palabraSecreta[i] == letra) {
            // 3. Si son iguales llama a mostrarLetra
            mostrarLetra(letra, i); 
             // Además incrementar la variable letrasEncontradas en 1.
            letrasEncontradas++;
        }
    }
        if (letrasEncontradas === 0) {
            errores=errores+1;
              mostrarAhorcado(errores);
        alert("LA LETRA NO ES PARTE DE LA PALABRA");
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
mostrarAhorcado=function(){
    if(errores == 1){
        mostrarImagen("ahorcadoImagen","Ahorcado_01.png");
    }
    if(errores == 2){
        mostrarImagen("ahorcadoImagen","Ahorcado_02.png");
    }
    if(errores == 3){
        mostrarImagen("ahorcadoImagen","Ahorcado_03.png");
    }
    if(errores == 4){
        mostrarImagen("ahorcadoImagen","Ahorcado_04.png");
    }
    if(errores == 5){
        mostrarImagen("ahorcadoImagen","Ahorcado_05.png");
    }
    if(errores == 6){
        mostrarImagen("ahorcadoImagen","Ahorcado_06.png");
    }
    if(errores == 7){
        mostrarImagen("ahorcadoImagen","Ahorcado_07.png");
    }
    if(errores == 8){
        mostrarImagen("ahorcadoImagen","Ahorcado_08.png");
    }
    if(errores == 9){
        mostrarImagen("ahorcadoImagen","Ahorcado_09.png");
    }
}