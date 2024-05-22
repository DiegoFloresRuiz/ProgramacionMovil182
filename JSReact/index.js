

console.log('P&D')
/* // funcion 
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
/*

const usuario={
    nombre: 'Diego',
    apellidoP: 'Flores',
    edad: 20,
    direccion: { //Objeto dentro del objeto
        pais:'Mexico',
        Ciudad: 'Queretaro',
        calle: 'Conocida'
    },
    amigos: ['Maro', 'Pupe'],
        estatus: true,
        envarCorreo: enviarCorr=( ) => 'envian-do...'
    
}
console.log(usuario.nombre)
console.log(usuario.direccion.calle)
console.log(usuario.amigos)

//metodos 
console.log(usuario.envarCorreo())*/


// Trabajo con el DOM 

const titulo = document.createElement('h1')
titulo.innerText = 'Soy un tilulo creado por JS'
document.body.append(titulo)

const boton = document.createElement('button')
boton.innerText = 'Preciona'
document.body.append(boton)

boton.addEventListener('click', function(){
    titulo.innerText = "Eventos click ejecutado"
    alert('Exito')
})
