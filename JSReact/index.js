console.log('Hola')
 // funcion 
/*function suma(a,b){
    return a+b
}*/

// Fast Arrow
/*const suma = (a,b) =>{
    return a+b
}*/

// Fast Arrow Simple
//const suma = (a,b) => a+b


//console.log(suma(2,3))

//Objetos 
const usuario={
    nombre: 'Diego',
    apellidoP: 'Flores',
    edad: 20,
    direccion: { //Objeto dentro del objeto
        pais:'Mexico',
        Ciudad: 'Queretaro',
        calle: 'Conocida'
    },
    amigos: {
        amigos:['Maro', 'Pupe'],
        estatus: true,
        envarCorreo: enviarCorr=( ) => 'enviar...'
    }
}