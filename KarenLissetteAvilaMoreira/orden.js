let empleados = [
    {nombre:"Marcos",edad:18},
    {nombre:"Roberto",edad:15},
    {nombre:"Kate",edad:25},
    {nombre:"Diana",edad:12},
    {nombre:"Benja",edad:5}
]
agregarPersona=function(){
    let errores=false;
    let nombre=recuperarTexto("txtNombre" );
   let edad= recuperarTexto("txtEdad"); 
   let validacionNombre=nombre.length;
    if(validacionNombre <3 ){
        mostrarTexto("lblErrorNombre","DEBE INGRESAR AL MENOS 3 DIGITOS");
        errores=true}
    if(edad<0 || edad>100){
                mostrarTexto("lblErrorEdad","LA EDAD DEBE ESTAR ENTRE 0 y 100"); 
            errores=true}
    if(errores!=true){
        let nuevaPersona={};
        nuevaPersona.nombre=nombre;
        nuevaPersona.edad=edad;
        empleados.push(nuevaPersona);
        mostrarPersonas();
        alert("PERSONA AGREGADA CORRECTAMENTE");
    }
}
mostrarPersonas=function(){
     let cmpTabla=document.getElementById("tablaEmpleados");
    let contenidoTabla="<table><tr>"+
    "<th> EDAD </th>"+
    "<th> NOMBRE </th>"+
    "</tr>";
    let elementoPersona;
    for(let i=0;i<empleados.length;i++){
        elementoPersona=empleados[i];
        contenidoTabla+="<tr><td>"+elementoPersona.edad+"</td>"
        +"<td>"+elementoPersona.nombre+"</td>"
         +"</tr>"
    }
    contenidoTabla+="</table>"
    cmpTabla.innerHTML=contenidoTabla;
}
econtrarMayor=function(){
    let personaMayor=empleados[0];
    let elementoPersona;
    for(i=1;i<empleados.length;i++){
        elementoPersona=empleados[i];
        if(personaMayor.edad<elementoPersona.edad){
            personaMayor=elementoPersona;
            break;
        }
        console.log(elementoPersona);
    }
    return personaMayor;
     
}
determinarMayor=function(){
    let mayor=econtrarMayor();
    let mensaje="La persona Mayor es: "+ mayor.nombre + " con " + mayor.edad + " años de edad .";
    mostrarTexto("lblMayor",mensaje);
}

econtrarMenor=function(){
    let personaMenor=empleados[0];
    let elementoPersonaM;
    for(i=1;i<empleados.length;i++){
        elementoPersonaM=empleados[i];
        if(elementoPersonaM.edad<personaMenor.edad){
            personaMenor=elementoPersonaM;
        }
        console.log(elementoPersonaM);
    }
    return personaMenor;
     
}
determinarMenor=function(){
    let menor=econtrarMenor();
    let mensaje="La persona Menor es: "+ menor.nombre + " con " + menor.edad + " años de edad .";
    mostrarTexto("lblMenor",mensaje);
}
