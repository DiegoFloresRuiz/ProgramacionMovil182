

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

/*const titulo = document.createElement('h1')
titulo.innerText = 'Soy un titulo creado por JS'
document.body.append(titulo)

const boton = document.createElement('button')
boton.innerText = 'Preciona'
document.body.append(boton)

boton.addEventListener('click', function(){
    titulo.innerText = "Eventos click ejecutado"
    alert('Exito')
})*/

//Trabajo con Arreglos
//const nombres= ['Alan', 'Isa', 'Pablo', 'Juan Pablo']
/*
for (let i =0 ; i< nombres.length; i++){
    const elemento= nombres  [i]
    console.log(elemento)


}

nombres.forEach(function (nombre){
    console.log(nombre)
})*/

/*
const array2 = nombres.map(function (nombre) {
    console.log(nombre); // Imprime cada nombre en la consola
    return nombre; // Retorna cada nombre
});

console.log(nombres); // Imprime el array original
console.log(array2);  // Imprime el nuevo array que es idéntico al original

const resultado = nombres.find(function (nombre) {
    if (nombre == 'Pablo') {
        return true; // Retorna true si el nombre es 'Pablo'
    }
});

console.log(resultado); // Imprime 'Pablo' si se encuentra, de lo contrario undefined
*/

  /*
  //FUNCION FILTER: RECORRE EL ARREGLO FILTRADO RESULTADO
  
  const resultado = nombres.find(function (nombre) {
    if (nombre != 'Pablo') {
        return nombre; 
    }
    return false; // Asegura que la función retorne algo cuando nombre es 'Pablo'
});

console.log(resultado); // Imprime el primer nombre que no sea 'Pablo'
console.log(nombres); // Imprime el array original
 */   
/*
    //FUNCION CONCAT:
    const edades=[78,89,12,8,10,15]
    console.log(nombres.concat(edades))

    console.log([...nombres, ...edades])
*/
//MOSULOS: IMPORT & EXPORT

//import {suma, resta} from "./calculadora.js" 
//import * as calc from "./calculadora.js"

// ASINCRONISMO EN JS 
/*
const ul = document.createElement('ul')

let datos = fetch('https://jsonplaceholder.typicode.com/posts')
.then(function(response){
    console. log("Carga de datos Conectada")
    return response.json()
}).then(function(data){
    console.log(data)
    data.forEach( function(posts){
        const li = document.createElement('li')
        li.innerHTML = posts.title
        ul.append(li)
    })
    document.body.append(ul)
})

console.log('Cargando HTML')
console.log('Cargando CSS')
console.log('Cargando Imagenes')


//console. log(datos)
*/
// Ejemplo con Async Await
const ul = document.createElement('ul')

async function cargarDatos(){
    const response = await fetch('https://jsonplaceholder.typicode.com/posts')
    const datos = await response.json()
    console.log(datos)
    datos.forEach( function(posts){
        const li = document.createElement('li')
        li.innerHTML = posts.title
        ul.append(li)
    })
    document.body.append(ul)
}
cargarDatos()

console.log('Cargando HTML')
console.log('Cargando CSS')
console.log('Cargando Imagenes')


/*
// Declarar el arreglo estudiantes
const estudiantes = [
    { name: 'Mane', age: 15 },
    { name: 'Andrea', age: 22 },
    { name: 'Alma', age: 19 },
    { name: 'Emma', age: 29 },
    { name: 'Maria', age: 13 },
    { name: 'Luis', age: 16 },
    { name: 'Yair', age: 21 },
];

// Función asíncrona para obtener los nombres de los estudiantes mayores de 18 años
async function obtenerNombresMayoresDe18(estudiantes) {
    const nombresMayoresDe18 = estudiantes
        .filter(estudiante => estudiante.age > 18)
        .map(estudiante => estudiante.name);
    return nombresMayoresDe18;
}

// Función principal para imprimir los arreglos
async function main() {
    // Obtener el arreglo nombresMayoresDe18 usando la función asíncrona
    const nombresMayoresDe18 = await obtenerNombresMayoresDe18(estudiantes);
    // Imprimir ambos arreglos
    console.log("Arreglo estudiantes:", estudiantes);
    console.log("Nombres de estudiantes mayores de 18 años:", nombresMayoresDe18);
}

// Ejecutar la función principal
main();
*/

