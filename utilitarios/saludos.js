saludar=function(){
    //recuperar el valor de la caja de texto txtNombre
    let nombre=recuperarTexto("txtNombre");
    //recuperar el valor de la caja de texto txtApellido
    let apellido=recuperarTexto("txtApellido");
//recuperar el valor de la caja de texto txtEdad
    let edad=recuperarInt("txtEdad");
//recuperar el valor de la caja de texto txtEstatura
    let estatura=recuperarFloat("txtEstatura");
//mostrar texto
    let mensajeBienvenida="Bienvevido " +nombre+ " "+apellido;
    mostrarTexto("lblResultado",mensajeBienvenida);
    //mostrar imagen
    mostrarImagen("imgSaludo","./imagenes/stitch.gif")
    //mostar texto en caja
    mostrarTextoEnCaja("txtNombre","")
}
