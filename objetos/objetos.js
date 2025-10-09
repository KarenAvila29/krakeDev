
probarAtributos=function(){
    let persona={
        nombre:"Karen" ,
        apellido:"Avila",
        edad:24,
        estaVivo:true   
    }
    console.log(persona.nombre);
     console.log(persona.edad);
     if(persona.estaVivo==false){
        console.log("no esta vivo");
     }else{
         console.log("esta vivo");
     }
}

modificarAtriutos=function(){
    let cuenta={
        numero:"1425142424",
        saldo:0.0
    }
    cuenta.saldo=100;
    cuenta.saldo+=10;
    console.log(cuenta.saldo);
}

crearCliente=function(){
    let cliente={
        cedula:"1725168130",
        nombre:"Karen"
    }
    let cliente1={ }
        cliente1.nombre="Romeo";
        cliente1.apellido="Salcedo";
        cliente1.cedula="17251684754";
}
probarIncrementoSaldo=function(){
    let cta={numero:"12458",saldo:34.0};
    incrementarSaldo(cta,100);
    console.log(cta.saldo);
}
probarDeterminarMayor=function(){
    let per1={nombre:"Daniel",edad:45};
    let per2={nombre:"Luisa",edad:48};
    let mayor=terminarMayor(per1,per2);
    if(mayor != null){
        console.log("El mayor es: "+ mayor.nombre );
    }
}

incrementarSaldo=function(cuenta,monto){
    cuenta.saldo+=monto;
}
terminarMayor=function(persona1,persona2){
    if(persona1.edad>persona2.edad){
        return persona1
    }else if(persona2.edad>persona1.edad){
        return persona2
    }else {
        return null;
    }
}
//En objetos.js crear una función llamada crearProducto, no recibe parámetros y ejecuta la siguiente lógica:
crearProducto=function(){
    //Crea una variable llamada producto1, 
    // esta variable será un objeto con atributos nombre (String), precio (float), stock (int). Colocar los
    // valores que usted desee en cada atributo.
    let producto1={
        nombre:"CERVEZA",
        precio:3.50,
        stock: 15
    }
   // 2. Crear una variable llamada producto2, con los mismos atributos, pero distintos valores asignados en cada uno.
   let producto2={
        nombre:"MANZANAS",
        precio:0.50,
        stock: 10
    }
    //3. Imprimir en consola el nombre del producto1
    console.log(producto1.nombre);
   // 4. Imprimir en consola el precio del producto2
    console.log(producto2.precio);
    /* Comparar el stock del producto1 con el stock del producto2. Imprimir una de las 3 sentencias según el 
     caso: Producto 1 tiene mayor stock, Producto 2 tiene mayor stock o Ambos productos tienen el mismo stock.*/
     if(producto1.stock==producto2.stock){
         console.log("Ambos productos tienen el mismo stock");
     }
     if(producto1.stock > producto2.stock){
         console.log("Producto 1 tiene mayor stock");
     }else{
         console.log("Producto 2 tiene mayor stock");
     }
}