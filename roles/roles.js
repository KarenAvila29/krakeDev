let empleados = [
    {cedula:"1714616123",nombre:"John",apellido:"Cena",sueldo:500.0},
    {cedula:"0914632123",nombre:"Luisa",apellido:"Gonzalez",sueldo:900.0},
    {cedula:"1725168130",nombre:"Karen",apellido:"Avila",sueldo:950.0}
]

let esNuevo=false;

//RETO 47 - ROLES PARTE 3
ejecutarNuevo=function(){
    habilitarComponente ("txtCedula");
    habilitarComponente ( "txtNombre");
    habilitarComponente ( "txtApellido" );
    habilitarComponente ( "txtSueldo");
    habilitarComponente ( "btnGuardar" );
    esNuevo=true;
}

mostrarOpcionEmpleado=function(){
    ocultarComponente("divRol");
    ocultarComponente("divResumen");
    mostrarComponente("divEmpleado");
    mostrarEmpleados();
    deshabilitarComponente("txtCedula");
    deshabilitarComponente( "txtNombre");
    deshabilitarComponente( "txtApellido" );
    deshabilitarComponente( "txtSueldo");
    deshabilitarComponente( "btnGuardar" );
   
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
