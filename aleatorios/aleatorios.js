//Crear una función que no reciba parámetros y retorne un número aleatorio entero entre 1 y 100 (incluidos)
aleatorioNumero=function(){
     let aleatorio;
    let numeroMultiplicado;
    let numeroEntero;
    let valor;
    aleatorio=Math.random(); 
    numeroMultiplicado=aleatorio*100;
    
    numeroEntero=parseInt(numeroMultiplicado);
    
    valor=numeroEntero+1;
    return valor;
}
//Crear una función llamada generarAleatorios que no reciba parámetros y realice la siguiente lógica:
generarAleatorios=function(){
let aleatorio=[];
let limite=recuperarTexto("txtLimite");
if(limite>=5 && limite<=20){
    for(let l=0;l<limite;l++){
        //console.log(l);
        let res=aleatorioNumero();
        aleatorio[l]=res;
    }
mostrarResultados(aleatorio);


}
}
mostrarResultados=function(arregloNumeros){
  let cmpTabla = document.getElementById("divTabla");
  let contenidoTabla = "<table><tr><th>ARREGLO</th></tr>";

  // El bucle debe usar la propiedad .length del arreglo
  for (let i = 0; i < arregloNumeros.length; i++) {
    // Agrega una nueva fila con cada elemento del arreglo
    contenidoTabla += "<tr><td>" + arregloNumeros[i] + "</td></tr>";
  }

  // Cierra la tabla
  contenidoTabla += "</table>";

  // Actualiza el contenido del div con la tabla completa
  cmpTabla.innerHTML = contenidoTabla;

}