calcularValorTotal = function () {
    //variables para recuperar los valores de las cajas de texto
    let nombreProducto;
    let precioProducto; // SE UTILIZA PARA RECUPERAR EL PRECIO COMO FLOAT
    let cantidad; // SE UTILIZA PARA RECUPERAR LA CANTIDAD COMO INT
    let porcentajeDescuento;

    //variables para almacenar los retornos de las funciones
    let valorSubtotal;
    let valorDescuento;
    let valorIVA;
    let valorTotal;
    //let existeError=tru;

    nombreProducto=recuperarTexto("txtProducto");
    //esProductoValido(nombreProducto);
    
    precioProducto=recuperarFloat ("txtPrecio");
   // esPrecioValido(precioProducto);
    
    cantidad=recuperarInt("txtCantidad");
   // esCantidadValida(cantidad);
    if(esProductoValido(nombreProducto) & esPrecioValido(precioProducto) & esCantidadValida(cantidad)){
        //calcula subtotal
    valorSubtotal=calcularSubtotal(precioProducto,cantidad);
     mostrarTexto("lblSubtotal", valorSubtotal);
     // calcula el valor del descuento
    valorDescuento=calcularDescuentoPorVolumen(valorSubtotal,cantidad);
    mostrarTexto("lblDescuento", valorDescuento);
    //resta subtotal - descuento
    let valorIva=valorSubtotal-valorDescuento;
    // El IVA debe calcularse sobre el valor del subtotal menos el descuento
    let valorIVA1=calcularIva(valorIva);
    valorIVA=parseFloat(valorIVA1);
    //9. Mostrar el resultado en el componente lblValorIVA    
       mostrarTexto("lblValorIVA", valorIVA);
    //10. Invocar a calcularTotal y lo que devuelve guardar en la variable valorTotal
    valorTotal=calcularTotal(valorSubtotal,valorDescuento,valorIVA);
    //11. Mostrar el resultado en el componente lblTotal
    mostrarTexto("lblTotal", valorTotal);
    }else{
         mostrarTexto("lblSubtotal"," 0.0");
          mostrarTexto("lblDescuento"," 0.0");
          mostrarTexto("lblValorIVA"," 0.0");
          mostrarTexto("lblTotal"," 0.0"); 

    }    
}

limpiar = function() {
      mostrarTextoEnCaja("txtProducto","CADENA VACIA");
      mostrarTextoEnCaja("txtPrecio","0.0");
      mostrarTextoEnCaja("txtCantidad","0");
     
}
