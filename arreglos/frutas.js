let frutas=["pera","manzana","banana"];
probarBusqueda=function(){
    let frutaIngresada=recuperarTexto("lblFrutas");
    let resultado=buscar(frutaIngresada);
    if(resultado == null){
            alert("NO EXISTE FRUTA");
    }else{
        alert(frutaIngresada+"existe en el cesto")
    }

}

buscar=function(fruta){
    let elemento;
    let frutaEncontrada=null;
    for(let i=0;i<fruta.length;i++){
        elemento=frutas[i];
        if(fruta==elemento){
            frutaEncontrada=elemento;
            break;
        }
    }
    return frutaEncontrada;
}