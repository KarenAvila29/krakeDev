calcularValorDescuento=function(monto,porcentajeDescuento){
    let total = (monto*porcentajeDescuento)/100;
    return total;
}
calcularIva=function(monto){
    let valorIva1 =monto*12/100;
    let valorIva=valorIva1.toFixed(3);
    return valorIva;
}
calcularSubtotal=function(precio,cantidad){
    let subtotal1=precio*cantidad;
     let subtotal=subtotal1.toFixed(3);
    return subtotal;
}
calcularTotal=function(subtotal,descuento,iva){
    let totalPagar1=subtotal-descuento+iva;
    let totalPagar=totalPagar1.toFixed(3);
    return totalPagar;
}

calcularDescuentoPorVolumen=function(subtotal,cantidad){
  
    if(cantidad > 0 && cantidad < 3){
                let total1=(subtotal*0)/100;
              let total=total1.toFixed(3);
        return total;
    }else{
        if(cantidad>=3 && cantidad<=5){
            total1=(subtotal*3)/100;
            total=total1.toFixed(3);
            return total;
        }else{
            if(cantidad>=6 && cantidad<=11){
            total1=(subtotal*4)/100;
            total=total1.toFixed(3);
            return total;
        }else{
            if(cantidad>=12){
                total1=(subtotal*5)/100;
                total=total1.toFixed(3);
                 return total;
            }
            
        }  
    }
}
}
esProductoValido=function(producto){
        let error = false;

    // obligatorio
    if (!producto) {
        mostrarTexto("lblError1", "*CAMPO OBLIGATORIO");
        error = true;
    }

    // longitud máxima
    else if (producto.length > 10) {
        mostrarTexto("lblError1", "El producto no puede tener más de 10 caracteres");
        error = true;
    }

    // si todo bien, limpiar error
    if (!error) {
        mostrarTexto("lblError1", "");
    }

    return !error; // true si no hubo error


}
esCantidadValida=function(cantidad){
   
      let error = false;

    // obligatorio
    if (!cantidad) {
        mostrarTexto("lblError2", "*CAMPO OBLIGATORIO");
        error = true;
    }

    // rango válido
    else if (cantidad < 0 || cantidad > 100) {
        mostrarTexto("lblError2", "La cantidad debe estar entre 0 y 100");
        error = true;
    }

    // si todo bien, limpiar error
    if (!error) {
        mostrarTexto("lblError2", "");
    }

    return !error;
}

esPrecioValido=function(precio){

  let error = false;

    // obligatorio
    if (!precio) {
        mostrarTexto("lblError3", "*CAMPO OBLIGATORIO");
        error = true;
    }

    // rango válido
    else if (precio < 0 || precio > 50) {
        mostrarTexto("lblError3", "El precio debe estar entre 0 y 50");
        error = true;
    }

    // si todo bien, limpiar error
    if (!error) {
        mostrarTexto("lblError3", "");
    }
    return !error;
}
