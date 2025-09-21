calcularPromedioNotas=function(){
    let valor1= recuperarFlotante("Nota1");
    let valor2=recuperarFlotante("Nota2");
    let valor3=recuperarFlotante("Nota3");
    let promedioFinal=calcularPromedio(valor1,valor2,valor3);
    let promedioFinal1=promedioFinal.toFixed(2);
    cambiarTexto("lblPromedio",promedioFinal1);
    
    if(promedioFinal<7 && promedioFinal>0){  
         //cambiarTexto("lblMensaje","REPROBADO");
         cambiarImagen("imgEstado","FRACASO.gif");
    }else {
        // cambiarTexto("lblMensaje","BUEN TRABAJO");
       cambiarImagen("imgEstado","EXITO.gif");
 
    }
}
