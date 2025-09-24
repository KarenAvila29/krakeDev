calcularPromedioNotas=function(){
    let valor1= recuperarFlotante("Nota1");
    let valor2=recuperarFlotante("Nota2");
    let valor3=recuperarFlotante("Nota3");
    let promedioFinal=calcularPromedio(valor1,valor2,valor3);
    let promedioFinal1=promedioFinal.toFixed(2);
    cambiarTexto("lblPromedio",promedioFinal1);
    
    if(promedioFinal1<5&&promedioFinal1>0){  
         cambiarTexto("lblMensaje","REPROBADO");
         cambiarImagen("imgEstado","REPROBADO.gif");
    }else if(promedioFinal1>=5&&promedioFinal1<=8){
         cambiarTexto("lblMensaje","BUEN TRABAJO");
       cambiarImagen("imgEstado","APROBADO.gif");
    }else if(promedioFinal1>=8&&promedioFinal1<=10){
        cambiarTexto("lblMensaje","EXCELENTE");
       cambiarImagen("imgEstado","EXCELENTE.gif");
    }else{
        cambiarTexto("lblMensaje","DATOS INCORRECTOS");
       cambiarImagen("imgEstado","ERROR.gif");
    }
}
