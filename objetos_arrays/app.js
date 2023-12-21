// Objetos
const nico = {
    nombre : "Nicolás",
    apellido : "Cirulli",
    mascotas : [ "Kugi", "Nila" ],
    mentor: true,
    alumno: false,
    presentarse: function(){
        console.log( `Hola` )
    },
   
}
const guille = {
    nombre : "Guillermo",
    apellido : "Cornetti",
    mascotas : [ "Gandalf" ],
    edad: 40,
    mentor: true,
    alumno: false,
}
const mentores = [ nico, guille ]
// Crear propiedades
nico.edad = 29

// Modificar propiedades
nico.nombre += " Catriel"

/* console.log( mentores[0].nombre ) */

// Eliminar propiedades

delete nico.alumno
delete nico.mentor


const metodosMentores = {

    presentarse(){
        console.log( `Hola soy ${ this.nombre } y tengo ${this.edad} años` )
    },
    darClases(){
        console.log('Empezar la clase')
    },
    terminarclase(){
        console.log( 'Terminar la clase' )
    }
}

/* Object.assign */
Object.assign( nico, metodosMentores )
/* nico.presentarse() */

Object.assign( guille, metodosMentores)
/* guille.presentarse() */

const copiaNico = {}
Object.assign( copiaNico, nico )

/* console.log( nico ) */

const tino = Object.freeze( {
    nombre : "Martin",
    apellido : "Araolaza",
    mascotas : [ "Batman", "Mimosa" ],
    mentor: true,
    alumno: false,
    presentarse: function(){
        console.log( `Hola soy ${ this.nombre } y tengo ${this.edad} años` )
    },
} )

const copiaTino = Object.assign( {}, tino )

/* 
console.log( Object.values( nico ) )
console.log( Object.keys( nico ) )
console.log( Object.entries( nico ) )

console.log( Object.hasOwn( nico, "empresa" ) ) 
*/


/* ARRAY */

const nombres = [ "Luz", "Angel", "Cristian", "Orlando", "Dalma" ]

/* console.log( nombres[2] ) */
/* El metodo push agrega elementos al final del array */
nombres.push( "Ricardo", "Edgardo" )

/* unshift lo mismo que push pero al inicio del array*/
nombres.unshift( "Fernando", "Gianfranco" )

/* pop - saco el ultimo elemento del array */
const removido = nombres.pop()
/* console.log( removido ) */

/* shift - lo mismo que pop pero al inicio */
const aux = nombres.shift()
/* console.log( aux ) */

/* Modificar el array en cualquier posicion */
nombres.splice( 3, 0, removido, aux )

const removidos = nombres.splice( 4, 2, "Laura", "Nahuel", "Nico" )
/* console.log( removidos ) */

/* unir arrays */

const todosLosNombres = [].concat( nombres, removidos )



/* Ordenar el array */

const todosLosNombresOrdenados = todosLosNombres.toSorted()

const numeros = [3,4,1,2,4,6,2,20,10,30]

const numerosOrdenados = numeros.toSorted()

/* console.log( numerosOrdenados ) */

/* Invertir el array */

const numerosInvertidos = numeros.toReversed()

/* console.log( numeros )

console.log(  numerosInvertidos  ) */

/* Verificar si un elemento esta en el array */
console.log( todosLosNombres )
console.log( todosLosNombres.includes( "Dalma" ) )

/* Buscar el indice de un elemento */

console.log( todosLosNombres.indexOf( "Dalma", 10 ) )
console.log( todosLosNombres.indexOf( "Fernando", 10 ) )
console.log( todosLosNombres.indexOf( "Martin" ) )

/* Convertir el array en un string */
console.log( todosLosNombres.join( " - " ) )


