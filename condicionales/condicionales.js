probar=function(){
    var interesf=  calcularTasaInteres(2000000.30   );
    console.log("La tasa de interes es: "+ interesf +" %"); 
    var valor=calcularCapacidadPago(50,1001.50 ,301.5);
    console.log("El valor de la cuota a pagar es: "+ valor);
     var descuento=calcularDescuento(5.6,12);
    console.log("El valor total a pagar es: "+ descuento);
    var colesterol=determinarColesterolILDL(110);
    console.log("Su colesterolILDL ES:" + colesterol);
    var claveValida=validarClave("KARENAVILA");
    console.log("LA CLAVE ES "+ claveValida);
    var mayuscula=esMayuscula("e");
    console.log("LA LETRA ES "+ mayuscula);
     var minuscula=esMinuscula("í");
    console.log("LA LETRA ES "+ minuscula);
     var digito=esDigito("6");
    console.log("LA LETRA ES "+ digito);
    var permiso=darPermiso(91.5,81.6,80.2);
    console.log("El permiso es:" + permiso)
    var permiso2=otorgarPermiso(80.6,91.5,81.6);
    console.log("El permiso es:" + permiso2)
    var permiso3=dejarSalir(99.2,98.5,91.6);
    console.log("El permiso es:" + permiso3)
    
}
calcularTasaInteres=function(ingresoAnualFloat){
    let interes=0;
    if(ingresoAnualFloat>0 && ingresoAnualFloat < 300000){
        interes=16;          
   }else if(ingresoAnualFloat>=300000 && ingresoAnualFloat<500000){
        interes=15;
    }else if(ingresoAnualFloat>=500000 && ingresoAnualFloat<1000000){
        interes=14; 
    }else if(ingresoAnualFloat>=1000000 && ingresoAnualFloat<2000000){
        interes=13;  
    }else if(ingresoAnualFloat>=2000000){
        interes=12;  
    }
    return  interes; 
}                                               
calcularCapacidadPago=function(Edad,ingresos,egresos){
    let valorPagar=ingresos-egresos;
    let valorCuota;
    if(Edad>50){
        valorCuota=(valorPagar*30)/100;
    }else{
        valorCuota=(valorPagar*40)/100;
    }
    return valorCuota;
}
calcularDescuento=function(precio,cantidad){
    let valorTotal=cantidad*precio;
    let valorPagar;
    if(cantidad>0 && cantidad<3){
        valorPagar=(valorTotal*0)/100;
    }
    else if(cantidad>=3 && cantidad<=5){
        valorPagar=(valorTotal*2)/100;
    }else if(cantidad>=6 && cantidad<=11){
         valorPagar=(valorTotal*3)/100;
    }else if (cantidad>=12){
        valorPagar=(valorTotal*4)/100;
    }    
    let total=valorTotal-valorPagar;
    return total;
}
determinarColesterolILDL=function(nivelColesterol){
    let resultado; 
     if (nivelColesterol < 100) {
        resultado= "Optimo";
      } else if (nivelColesterol >= 100 && nivelColesterol < 130) {
         resultado= "Casi optimo";
      } else if (nivelColesterol >= 130 && nivelColesterol < 160) {
         resultado="Límite alto";
      } else if (nivelColesterol >= 160 && nivelColesterol < 190) {
         resultado= "Alto";
      } else {
         resultado= "Muy alto";
      }
      return resultado;
}
validarClave=function(clave){
    let clave1=clave.length;
    if (clave1>=8 && clave1<=16){
        return true;
    }else{
        return false;
    }
}
esMayuscula=function(caracter){
     let letra=caracter.charCodeAt(0);
    if (letra>=65 && letra<=90){
        return true;
    }else{
        return false;
    }
}
esMinuscula=function(caracter){
     let letra=caracter.charCodeAt(0);
    if ((letra>=97 && letra<=122) || (letra>=160 && letra<=163) || (letra == 130)){
        return true;
    }else{
        return false;
    }
}
esDigito=function(caracter){
  let letra=caracter.charCodeAt(0);
    if (letra>=48 && letra<=57){
        return true;
    }else{
        return false;
    }
}
darPermiso=function(notaFisica,notaMatematica,notaGeometria){
    if (notaFisica>90 || notaGeometria >90 || notaMatematica>90){
        return true;
    }
        else{
            return false;
        }
}
otorgarPermiso=function(notaMatematica,notaFisica,notaGeometria){
 if ((notaFisica>90 || notaMatematica>90) &&  (notaGeometria >80)){
        return true;
    }
        else{
            return false;
        }
}
dejarSalir=function(notaMatematica,notaFisica,notaGeometria ){
     if( (notaMatematica > 90 || notaFisica > 90 || notaGeometria > 90) && (notaFisica > notaMatematica)){
        return true;
     }else{
        return false;
     }
}