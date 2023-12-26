const nombre = "NicOlAs"
const nombreCompleto = "Angel William Leonel Lopez"



/* toUpperCase() */
const nombreEnMayusculas = nombre.toUpperCase()

/* console.log( nombreEnMayusculas ) */

/* toLowerCase() */

const nombreEnMinusculas = nombre.toLowerCase()

/* console.log( nombreEnMinusculas ) */

/* charAt() */

/* console.log( nombre.charAt(3).toLowerCase() ) 
console.log( nombre[3] ) */

/* slice()  */
/* console.log( nombre.slice( 1, 3 ) ) */

/* substring() */
/* console.log( nombre.substring( 1, 3 ) ) */

/* replace() */
/* console.log( nombreCompleto.replace( "n", "N" ) ) */


/* indexOf */
/* console.log( nombreCompleto.indexOf(" ") ) */

const primerEspacio = nombreCompleto.indexOf(" ")
const segundoEspacio = nombreCompleto.indexOf( " ", primerEspacio + 1 )
const tercerEspacio = nombreCompleto.indexOf( " ", segundoEspacio + 1 )
/* console.log( tercerEspacio )
console.log( nombreCompleto.lastIndexOf(" ") )
 */
/* console.log( nombreCompleto.slice( 0, tercerEspacio ).toUpperCase() )
 */
/* includes */
/* console.log( nombreCompleto.includes( "Angel", segundoEspacio ) )
 */

/* Split */
/* console.log( nombreCompleto.split(" ").toSorted().join( " " ) )
 */


// Number
const edad = "29"
const altura = "1.74"
const apellido = "Cirulli"
// NaN -> Not a Number

/* 
console.log( Number( edad ) )
console.log( Number( altura ) )
console.log( Number( apellido ) )
console.log( Number( 23.9 ) )  
*/

// parseInt
/* 
console.log( parseInt( edad ) )
console.log( parseInt( altura ) )
console.log( parseInt( apellido ) )
console.log( parseInt( 23.9 ) ) 
*/

// parseFloat

/* 
console.log( parseFloat( edad ) )
console.log( parseFloat( altura ) )
console.log( parseFloat( apellido ) )
console.log( parseFloat( 23.9 ) ) 
*/


// isNaN
const numeroIngresado = Number( "hola" )
/* console.log( numeroIngresado )
console.log( !isNaN( numeroIngresado ) ) */


// toFixed
const numeroEjemplo = 23.23431234519

/* console.log( Number( numeroEjemplo.toFixed( 2 ) ) ) */


// toLocaleString
/* const precio = 25000000
console.log( precio.toLocaleString("es-AR", { style: "currency", currency: "ARS" })) */


// Objeto Math
const numeros = [300, 2, 400, 30000, 0, -10, 500000]

console.log( "Objeto Math:", Math )

/* abs */
/* console.log( Math.abs( -10 ) )
console.log( Math.abs( +10 ) ) */

/* max */
/* console.log( Math.max( ...numeros ) ) */

/* min */
/* console.log( Math.min( ...numeros ) ) */

/* floor */
/* console.log( "floor: 23.7", Math.floor(  23.7 ) ) */

/* ceil */
/* console.log( "ceil: 23.3" , Math.ceil(  23.3 ) ) */

/* round */
/* console.log( "round: 23.5", Math.round(  23.5 ) )
console.log( "round: 23.4", Math.round(  23.4 ) ) */


/* random */
/* let numeroAleatorio = parseInt( Math.random() * 100 )

if( numeroAleatorio < 10 ){
    numeroAleatorio += 10
}

console.log( numeroAleatorio ) */



