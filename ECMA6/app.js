/* Ternarios */
/* condicion ? si se cumple : si no se cumple */
/* let edad = 29 */

/* let mensaje 

if( edad >= 18 ){
    mensaje = "Puede pasar"
}else{
    mensaje = "No puede pasar"
} */

/* let mensaje = edad >= 18 ? "Puede pasar" : "No puede pasar"

let mensajeDos = `Hola nicolas ${edad >= 18 ? "puede pasar" : "no puede pasar"}` */



/* spread */
/* ... */

const parrafos = document.querySelectorAll( 'p' )


const arrayParrafos = [ ...parrafos ].map( parrafo => parrafo.textContent ) 
const arrayParrafos2 = Array.from( parrafos ).map( parrafo => Number( parrafo.textContent ) ) 

const ordenados = [...arrayParrafos2].sort( (a,b) => b - a  )

const auxNumeros = [1,2,3,4,1,1,2,2323,-100,122,23233,55555,3]

/* console.log( Math.max( ...auxNumeros ) )
console.log( Math.min( ...auxNumeros ) ) */

const mentor = {
    nombre: "Jose Lopez",
    edad: 23,
    rol: 'Mentor'
}

const copiaJose = { ...mentor, nombre:"Jose Lopez" }

/* console.log(  copiaJose )

console.log( arrayParrafos2 )
console.log( ordenados ) */

const numeros = [1,2,3,4,5,6]

const copiaNumeros = [ -1, 0, ...numeros ]


/* console.log( numeros )

console.log( copiaNumeros ) */


const sumar = ( ...numeros ) =>{
    console.log( numeros )
    return numeros.reduce( (total, numero) => total + numero, 0 )
}

const arrayNumeros3 = [10,20,30,40,50,50,70,20,30  ]

/* console.log( sumar( ...arrayNumeros3 ) ) */


/* Destructuring */

/* 
const nombreJose = mentor.nombre
const edad = mentor.edad 
const rol = mentor.rol
*/


const { edad , nombre: nombreJose, rol } = mentor

/* console.log( nombreJose, edad, rol  ) */

const [ primerElemento, segundoElemento ] = arrayNumeros3

/* console.log( primerElemento, segundoElemento )
 */
function mostrarMensaje( nombre, edad, rol ){
    console.log( `Hola soy ${nombre}, tengo ${edad} años y mi rol es: ${rol}` )
} 

function mostrarMensajeDos( obj ){
    console.log( `Hola soy ${obj.nombre}, tengo ${obj.edad} años y mi rol es: ${obj.rol}` )
} 

function mostrarMensajeTres( { nombre, edad, rol, mascota }){
    console.log( `Hola soy ${nombre}, tengo ${edad} años y mi rol es: ${rol} ${ mascota ? `y tengo una mascota que se llama ${mascota}` : "" } ` )
    
} 
/* 
mostrarMensajeTres( mentor )
mostrarMensajeTres( { nombre: 'Martin', edad: 33, rol: 'Mentor', mascota: 'Batman' } ) */

/* set */
console.log( auxNumeros )
console.log( [  ...new Set( auxNumeros  )  ] )







