let empleados = [
    {cedula:"1714616123",nombre:"John",apellido:"Cena",sueldo:500.0},
    {cedula:"0914632123",nombre:"Luisa",apellido:"Gonzalez",sueldo:900.0},
    {cedula:"1725168130",nombre:"Karen",apellido:"Avila",sueldo:950.0}
]

let esNuevo=false;

ejecutarBusqueda=function(){
    let valorCedula=recuperarTexto("txtBusquedaCedula");
    let empleadoBusqueda=buscarEmpleado(valorCedula);
    if(empleadoBusqueda == null){
        alert("EMPLEADO NO EXISTE");
        }else{
            mostrarTextoEnCaja("txtCedula", empleadoBusqueda.cedula);
            mostrarTextoEnCaja("txtNombre", empleadoBusqueda.nombre);
            mostrarTextoEnCaja("txtApellido", empleadoBusqueda.apellido);
             mostrarTextoEnCaja("txtSueldo", empleadoBusqueda.sueldo);
              deshabilitarComponente("txtCedula");
            habilitarComponente ( "txtNombre");
            habilitarComponente ( "txtApellido" );
            habilitarComponente ( "txtSueldo");
        }
}
//RETO 47 - ROLES PARTE 3
guardar=function(){
   let validaciones=true;
    //VALIDACION CEDULA
    let valorCedula=recuperarTexto("txtCedula");
    let digitosCedula=valorCedula.length;
    if(digitosCedula==10){
         for (let i = 0; i < digitosCedula; i++) {
        let caracter = valorCedula.charAt(i);
        // Verificar si el caracter no es un dígito
        if (caracter < '0' || caracter > '9') {
        mostrarTexto("lblErrorCedula", "DEBE TENER SOLO NÚMEROS");
        validaciones=false; 
        }
    }
   
    }else{
      mostrarTexto("lblErrorCedula", "DEBE TENER 10 NÚMEROS");
      }
      //VALIDACION NOMBRE
    let valorNombre=recuperarTexto("txtNombre");
    let digitosNombre=valorNombre.length;
    if(digitosNombre>=3){
         for (let i = 0; i < digitosNombre; i++) {
        let caracter = valorNombre.charAt(i);
        // Verificar si el caracter no es un dígito
        if (caracter < 'A' || caracter > 'Z') {
        mostrarTexto("lblErrorNombre", "DEBE TENER SOLO MAYUSCULAS");
        validaciones=false;;}
        
    }
   
    }else{
      mostrarTexto("lblErrorNombre", "DEBE TENER AL MENOS 3 LETRAS");
      
      }

      //VALIDACION APELLIDO
    let valorApellido=recuperarTexto("txtApellido");
    let digitosApellido=valorApellido.length;
    if(digitosApellido>=3){
         for (let i = 0; i < digitosApellido; i++) {
        let caracter = valorApellido.charAt(i);
        // Verificar si el caracter no es un dígito
        if (caracter < 'A' || caracter > 'Z') {
        mostrarTexto("lblErrorApellido", "DEBE TENER SOLO MAYUSCULAS");
        validaciones=false;;}
        
    }
    }else{
      mostrarTexto("lblErrorApellido", "DEBE TENER AL MENOS 3 LETRAS");
      
      }

      //VALIDACION SUELDO
    let valorSueldo=recuperarFloat("txtSueldo");
        
      if ((valorSueldo%1) == 0 ) {
         mostrarTexto("lblErrorSueldo", "INGRESE UN VALOR FLOTANTE VÁLIDO (123.45)");
    validaciones=false;;
    
  }

    if(valorSueldo<=400 || valorSueldo>=5000){
        
        mostrarTexto("lblErrorSueldo", "EL RANGO ES DE 400.0 a 5000.0");
        validaciones=false;
    }
  

    //
    if(validaciones!==false){
    let resultado=buscarEmpleado(valorCedula);
    if (resultado==null){
        let empleado={};
        empleado.cedula=valorCedula;
        empleado.nombre=valorNombre;
         empleado.apellido=valorApellido;
        empleado.sueldo=valorSueldo;
        let guardar=agregarEmpleado(empleado);
        if(guardar==true){
            alert("EMPLEADO GUARDADO CORRECTAMENTE");
            mostrarEmpleados();
            deshabilitarEmpleado();
            
        }
        }else{
          // alert("EMPLEADO EXISTE");
           esNuevo=false;
            if(esNuevo==false){
             let empleadoEncontrado=buscarEmpleado(valorCedula);
            if(empleadoEncontrado != null){
                 empleadoEncontrado.nombre=valorNombre;
                 empleadoEncontrado.apellido=valorApellido;
                 empleadoEncontrado.sueldo=valorSueldo;
                 mostrarEmpleados();
                 alert("EMPLEADO MODIFICADO CON EXISTO");
                 deshabilitarEmpleado();
                 }     
            }
             }
        }
}
ejecutarNuevo=function(){
    habilitarComponente ("txtCedula");
    habilitarComponente ( "txtNombre");
    habilitarComponente ( "txtApellido" );
    habilitarComponente ( "txtSueldo");
    habilitarComponente ( "btnGuardar" );
    esNuevo=true;
}

buscarEmpleado=function(cedula){
    let elementoEmpleado;
    let empleadoEncontrado=null;
    for(let i=0;i<empleados.length;i++){
         elementoEmpleado=empleados[i];
         if(elementoEmpleado.cedula== cedula){
            empleadoEncontrado=elementoEmpleado;
            break;
         }
    }
    return empleadoEncontrado;
}
agregarEmpleado=function(empleado){
    let resultado=buscarEmpleado(empleado);
    if (resultado==null){
        empleados.push(empleado);
            return true;
    }else{
        return false;
    }

}

mostrarOpcionEmpleado=function(){
    ocultarComponente("divRol");
    ocultarComponente("divResumen");
    mostrarComponente("divEmpleado");
    mostrarEmpleados();
   deshabilitarEmpleado();
   
}

mostrarOpcionRol=function(){
     ocultarComponente("divEmpleado");
      ocultarComponente("divResumen");
      mostrarComponente("divRol");
}

mostrarOpcionResumen=function(){
     ocultarComponente("divEmpleado");
      ocultarComponente("divRol");
      mostrarComponente("divResumen");
}

//RETO 46 -ROLES PARTE2
mostrarEmpleados=function(){
     let cmpTabla=document.getElementById("tablaEmpleados");
    let contenidoTabla="<table><tr>"+
    "<th> CEDULA </th>"+
    "<th> NOMBRE </th>"+
    "<th> APELLIDO </th>"+
    "<th> SUELDO </th>"+
    "</tr>";
    let elementoEmpleado;
    for(let i=0;i<empleados.length;i++){
        elementoEmpleado=empleados[i];
        contenidoTabla+="<tr><td>"+elementoEmpleado.cedula+"</td>"
        +"<td>"+elementoEmpleado.nombre+"</td>"
        +"<td>"+elementoEmpleado.apellido+"</td>"
         +"<td>"+elementoEmpleado.sueldo+"</td>"
        +"</tr>"
    }
    contenidoTabla+="</table>"

    cmpTabla.innerHTML=contenidoTabla;
}
deshabilitarEmpleado=function(){
 deshabilitarComponente("txtCedula");
    deshabilitarComponente( "txtNombre");
    deshabilitarComponente( "txtApellido" );
    deshabilitarComponente( "txtSueldo");
    deshabilitarComponente( "btnGuardar" );
}
limpiar=function(){
    mostrarTextoEnCaja("txtCedula"," ");
    mostrarTextoEnCaja("txtNombre"," ");
    mostrarTextoEnCaja("txtApellido"," ");
    mostrarTextoEnCaja("txtSueldo"," ");
    mostrarTextoEnCaja("txtCedula"," ");
   
    deshabilitarEmpleado();
     esNuevo=false;
}


//ROL
buscarPorRol=function(){
     let valorCedula=recuperarTexto("txtBusquedaCedulaRol");
       let resultado=buscarEmpleado(valorCedula);
       if(resultado!==null){
           mostrarTexto("infoCedula",resultado.cedula); 
           mensaje=(resultado.nombre + " " + resultado.apellido);
           mostrarTexto("infoNombre",mensaje); 
            mostrarTexto("infoSueldo",resultado.sueldo); 
       }else{
        alert("EL EMPLEADO NO EXISTE");
       }
}