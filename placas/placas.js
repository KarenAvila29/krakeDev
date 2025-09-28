validarPlaca=function(){
     let placa=recuperarTexto("txtPlaca");
    let erroresEstructura=validarEstructura(placa);
    if(erroresEstructura==true){
                mostrarTexto("lblValidacion","ESTRUCTURA VALIDA");
                obtenerProvincia(placa);
                obtenerTipoVehiculo(placa);
                obtenerDiaPicoYPlaca(placa);
    }else{
             mostrarTexto("lblValidacion","ESTRUCTURA INCORRECTA");
    }
}
limpiar=function(){

    mostrarTextoEnCaja("txtPlaca","");
    mostrarTexto("lblValidacion","");
    mostrarTexto("lblErrores","");
    mostrarTexto("lblProvincia","");
    mostrarTexto("lblTipo","");
    mostrarTexto("lblCirculacion","");
}