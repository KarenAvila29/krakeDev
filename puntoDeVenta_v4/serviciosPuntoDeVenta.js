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
    let subtotal=precio*cantidad;
    return subtotal;
}
calcularTotal=function(subtotal,descuento,iva){
    let totalPagar1=subtotal-descuento+iva;
    let totalPagar=totalPagar1.toFixed(3);
    return totalPagar;
}
