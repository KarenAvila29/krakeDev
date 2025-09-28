validarEstructura=function(placa){
    let errorList=[];
    let errorList1=[];
    let tamano=placa.length;
    let errores =0;
    if(tamano==7){     
       if(esMayuscula(placa[0])==false){
            errores=errores+1;
            errorList.push("La primera letra debe ser mayuscula");
       }if(esMayuscula(placa[1])==false){
            errores=errores+1;
            errorList.push("La segunda letra debe ser mayuscula");
       }if(esMayuscula(placa[2])==false){
            errores=errores+1;
            errorList.push("La tercera letra debe ser mayuscula");
       }if(esGuion(placa[3])==false){
            errores=errores+1;
            errorList.push("el cuarto digito debe ser - ");
       }if(esDigito(placa[4])==false){
            errores=errores+1;
             errorList.push("el quinto digito debe de ser un numero");
       }if(esDigito(placa[5])==false){
            errores=errores+1;
             errorList.push("el sexto digito debe de ser un numero");
       }if(esDigito(placa[6])==false){
            errores=errores+1;
             errorList.push("el septimo digito debe de ser un numero");
       }if(!errores==0){
            let finalErrorMessages = errorList.join(" \n");
            mostrarTexto("lblErrores",finalErrorMessages);
           // return false;

       }else{
            
            return true;
       }

    }
    if(tamano==8){     
       if(esMayuscula(placa[0])==false){
            errores=errores+1;
            errorList1.push("La primera letra debe ser mayuscula");
       }if(esMayuscula(placa[1])==false){
            errores=errores+1;
            errorList1.push("La segunda letra debe ser mayuscula");
       }if(esMayuscula(placa[2])==false){
            errores=errores+1;
            errorList1.push("La tercera letra debe ser mayuscula");
       }if(esGuion(placa[3])==false){
            errores=errores+1;
            errorList1.push("el cuarto digito debe ser - ");
       }if(esDigito(placa[4])==false){
            errores=errores+1;
             errorList1.push("el quinto digito debe de ser un numero");
       }if(esDigito(placa[5])==false){
            errores=errores+1;
             errorList1.push("el sexto digito debe de ser un numero");
       }if(esDigito(placa[6])==false){
            errores=errores+1;
             errorList1.push("el septimo digito debe de ser un numero");
        }if(esDigito(placa[7])==false){
            errores=errores+1;
            errorList1.push("el octavo digito debe de ser un numero");
       }if(!errores==0){
            let finalErrorMessages1 = errorList1.join(" \n");
            mostrarTexto("lblErrores",finalErrorMessages1);
           return false;

       }else{
            
            return true;
       }
    }else{
         mostrarTexto("lblErrores","La placa debe tener 7 o 8 digitos");
       // error=false;
    }
}
obtenerProvincia=function(placa){
    let letra;
    letra=placa.charAt(0);
    if(letra=="A"){
            mostrarTexto("lblProvincia","AZUAY");
    }else if(letra=="B"){
            mostrarTexto("lblProvincia","BOLIVAR");
    }else if(letra=="U"){
            mostrarTexto("lblProvincia","CAÑAR");
    }else if(letra=="C"){
            mostrarTexto("lblProvincia","CARCHI");
    }else if(letra=="X"){
            mostrarTexto("lblProvincia","COTOPAXI");
    }else if(letra=="H"){
            mostrarTexto("lblProvincia","CHIMBORAZO");
    }else if(letra=="O"){
            mostrarTexto("lblProvincia","EL ORO");
    }else if(letra=="E"){
            mostrarTexto("lblProvincia","ESMERALDAS");
    }else if(letra=="W"){
            mostrarTexto("lblProvincia","GALAPAGOS");
    }else if(letra=="G"){
            mostrarTexto("lblProvincia","GUAYAQUIL");
    }else if(letra=="I"){
            mostrarTexto("lblProvincia","IMBABURA");
    }else if(letra=="L"){
            mostrarTexto("lblProvincia","LOJA");
    }else if(letra=="R"){
            mostrarTexto("lblProvincia","LOS RIOS");
    }else if(letra=="M"){
            mostrarTexto("lblProvincia","MANABI");
    }else if(letra=="V"){
            mostrarTexto("lblProvincia","SANTIAGO");
    }else if(letra=="N"){
            mostrarTexto("lblProvincia","NAPO");
    }else if(letra=="S"){
            mostrarTexto("lblProvincia","PASTAZA");
    }else if(letra=="P"){
            mostrarTexto("lblProvincia","PICHINCHA");
    }else if(letra=="K"){
            mostrarTexto("lblProvincia","SUCUMBIOS");
    }else if(letra=="T"){
            mostrarTexto("lblProvincia","TUNGURAGUA");
    }else if(letra=="Z"){
            mostrarTexto("lblProvincia","ZAMORA CHINCHIPE");
    }else if(letra=="Y"){
            mostrarTexto("lblProvincia","SANTA ELENA");
    }else{

        mostrarTexto("lblProvincia","PROVINCIA INCORRECTA");
    }
}
obtenerTipoVehiculo=function(placa){
    let letra;
    letra=placa.charAt(1);
        if(letra=="A" || letra=="z"){
            mostrarTexto("lblTipo","Vehiculo Comercial(taxis o autobuses)");
    }if(letra=="E"){
            mostrarTexto("lblTipo","Vehiculos Gubernamentales");
    }if(letra=="X"){
            mostrarTexto("lblTipo","Vehiculos de uso oficial");
    }if(letra=="s"){
             mostrarTexto("lblTipo","Vehiculos del Gobierno Provincial");
    }if(letra=="M"){
             mostrarTexto("lblTipo","Vehiculos municipal");
    }else
    {
        mostrarTexto("lblTipo","Vehiculo Particular");
    }
}
obtenerDiaPicoYPlaca=function(placa){
    let letra;
    let ultimaPosicion;
    ultimaPosicion=placa.length -1;
    letra=placa.charAt(ultimaPosicion);
    if(letra==1 || letra==2){
        mostrarTexto("lblCirculacion","Lunes");
    }else if(letra==3 || letra==4){
         mostrarTexto("lblCirculacion","Martes");
    }else if(letra==5 || letra==6){
         mostrarTexto("lblCirculacion","Miercoles");
    }else if(letra==7 || letra==8){
         mostrarTexto("lblCirculacion","Jueves");
    }else if(letra==9|| letra==0){
         mostrarTexto("lblCirculacion","Viernes");
    }else {
        mostrarTexto("lblCirculacion","Sabado - Domingo - Feriados");
    }
}
