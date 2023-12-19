// Tipos de datos

// Tipos de datos Primitivos

// String
// Texto, cadena de caracteres
// Creamos un string con -> " ", ' ', ` `
/* console.log( "Dalma" )
console.log( 'Fernando' )
console.log( `Angel` ) */

// Number
/* console.log( 29 )
console.log( -10 )
console.log( 2.5 )
console.log( -3.5 )
console.log( 25000000000000 ) */

// Booleano
/* console.log( true )
console.log( false )
 */
// undefined
/* console.log( undefined ) */

// null
/* console.log( null ) */

// Variables
// los nombres van a ser en camelCase
// LET -> Se puede re-asignar

let saldo
saldo = 100
saldo = 70


// CONST -> Cuando la creamos se le asigna un dato y ese dato no puede cambiar 
const dni = 38000000


// operadores aritmeticos

/* let primerNombre = "Nicolas"
let segundoNombre = "Catriel"
let apellido = "Cirulli"
let nombreCompleto = primerNombre + " " + segundoNombre + " " + apellido
console.log( nombreCompleto )

let numeroUno = 10
let numeroDos = 20
console.log( numeroUno + numeroDos )
console.log( numeroUno - numeroDos )
console.log( numeroUno * numeroDos )
console.log( numeroDos / numeroUno )

console.log( "Modulo:", numeroDos % numeroUno )

console.log( "exponente", 2 ** 4 ) */


// operadores de comparacion
/* 
 >
 <
 >=
 <=
 ==
 ===
 !=
 !==
*/

/* 
console.log( 10 > 5 )
console.log( 10 < 5 )
console.log( 10 >= 11 )
console.log( 10 <= 12 )
console.log( 10 == "10" )
console.log( 10 === "10" ) 
console.log( 10 != "10" )
console.log( 10 !== "10" ) */

// operadores logicos

/* 
    && -> AND
    || -> OR
    ! -> NOT
*/
/* console.log( "tabla de verdad && ( AND )" )
console.log( true && true ) // -> true
console.log( true && false ) // -> false
console.log( false && true ) // -> false
console.log( false && false ) // -> false

console.log( "tabla de verdad || ( OR )" )
console.log( true || true ) // -> true
console.log( true || false ) // -> true
console.log( false || true ) // -> true
console.log( false || false ) // -> false

console.log( "tabla de verdad ! ( NOT )" )
console.log( !true ) // -> false
console.log( !false ) // -> true */


/* let primerNombre = "Nicolas"
let segundoNombre = "Catriel"
let apellido = "Cirulli" */
/* let nombreCompleto = primerNombre + " " + segundoNombre + " " + apellido */

/* let nombreCompleto = `${ primerNombre }
${segundoNombre}
${apellido}`

console.log( nombreCompleto )

console.log( `La operacion 10+5 es igual a: ${ 10+5 }` ) */


// Object ( objeto )


const alumnos = ["Ignacio", "Fernando", "Abel", "Andres"]

const mentores = [
    {
        nombre: "Nicolas Catriel Cirulli",
        edad: 29,
        trabajo: { empresa: "Mindhub", rol: "Mentor" }
    },
    {
        nombre: "Guillermo Hugo Cornetti",
        edad: 40,
        trabajo: { empresa: "Mindhub", rol: "Mentor" }
    },
    {
        nombre: "Jose Antonio Lopez Zacaro",
        edad: 23,
        trabajo: { empresa: "Mindhub", rol: "Mentor" }
    },
    {
        nombre: "Martin Sebastian Araolaza",
        edad: 33,
        trabajo: { empresa: "Mindhub", rol: "Mentor" }
    }

]


console.log( mentores[1].trabajo.empresa )
