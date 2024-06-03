
console.log('Ejercicio 1')

const numeros = [9, 2, 8, 7, 5, 6, 6, 1, 3, 4, 2, 8, 1, 7, 6]
async function obtenerPares(numeros) {
    const pares = numeros.filter(numero => numero % 2 === 0);
    return pares;
}

async function main() {

    const pares = await obtenerPares(numeros);

    console.log("Arreglo de numeros:", numeros);
    console.log("Arreglo de numeros pares:", pares);
}

main();

 /*
const estudiantes = [ { name: 'Mane', age: 15 }, { name: 'Andrea', age: 22 }, { name: 'Alma', age: 19 }, {
    name: 'Emma', age: 29 }, { name: 'Maria ', age: 13 },{ name: 'Luis', age: 16 },{ name: 'Yair', age: 21 },];

async function  obtenerMas18(estudiantes){
    const mas18 = estudiantes.filter(estudiante => estudiante.age > 18)
    return mas18;
}

async function main(){
    const mas18 = await obtenerMas18(estudiantes)
    console.log('Arreglo de estudiantes: ', estudiantes)
    console.log('Arreglo de +18: ', mas18)
}

main();
*/