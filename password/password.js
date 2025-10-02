ejecutarvalidacion=function(){

    let mensaje=recuperarTexto("txtPassword");
    validarPassword(mensaje);
}

validarPassword=function(password){
    let errores=0 ;
    let error = [ ];

    //verificar que la contraseña tenga almenos 8 digitos
    if(password.length <8 ){
        errores=errores+1;
             error.push("La contraseña debe tener al menos 8 caracteres");
    }  
      //verificar que la contraseña no tenga mas de 16 digitos
    if(password.length >16 ){
         errores=errores+1;
        error.push("La contraseña no debe exceder los 16 caracteres");
    }  
     //verificar que la contraseña tenga al menos una letra mayuscula
    let tieneMayuscula = false;
        for (let i = 0; i < password.length; i++) {
            let caracter = password.charAt(i);
            if (caracter >= 'A' && caracter <= 'Z') {
                tieneMayuscula = true;
                break;
            }
        }
        if (!tieneMayuscula) {
            errores=errores+1;
            error.push( "La contraseña debe contener al menos una letra mayuscula.");
        }
      //verificar que la contraseña tenga al menos un digito
      let tieneDigito = false;
        for (let i = 0; i < password.length; i++) {
            const caracter = password.charAt(i);
            if (caracter >= '0' && caracter <= '9') {
                tieneDigito = true;
                break;
            }
        }
        if (!tieneDigito) {
             errores=errores+1;
            error.push( "La contraseña debe contener al menos un digito");
        }
        //verificar que la contraseña tenga un caracter especial * - _
        let tieneEspecial = false;
        const caracteresEspeciales = ['*', '-', '_'];
        for (let i = 0; i < password.length; i++) {
            if (caracteresEspeciales.includes(password.charAt(i))) {
                tieneEspecial = true;
                break;
            }
        }
        if (!tieneEspecial) {
             errores=errores+1;
          error.push( "La contraseña debe contener al menos uno de los siguientes caracteres especiales: *, - o _");
        }
        // verificacion si es correcta o no la contraseña
        if(errores==0){
            
             mostrarTexto("lblErrores","contraseña correcta");
            

       }else{
            let finalErrorMessages = error.join(" \n");
            mostrarTexto("lblErrores",finalErrorMessages);

       }

         
        
}

