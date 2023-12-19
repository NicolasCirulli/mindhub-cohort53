/* const luz = {
    nombre : "Luz Mieres",
    edad: 26
}

const valen = {
    nombre : "Valentina Henao",
    edad : 27
}

const presentarse = `Hola soy ${luz.nombre} y tengo ${luz.edad} años`

console.log( presentarse )

if( valen.edad < 18 ){
    console.log( `${valen.nombre} es menor de edad` )
}

if( luz.edad > valen.edad ){
    console.log( `${ luz.nombre } es mayor que ${valen.nombre}` )
}else if( luz.edad == valen.edad ){
    console.log( `${ luz.nombre } y ${valen.nombre} tienen la misma edad` )
}else{
    console.log( `${ valen.nombre } es mayor que ${luz.nombre}` )
}


const alumnas = [ luz, valen ]

console.log( alumnas[1].nombre )
 */
/*
console.log( `${ luz.nombre } es mayor que ${valen.nombre}` )
console.log( `${ valen.nombre } es mayor que ${luz.nombre}` )
 */
/* 
const datoIngresado = prompt( "Ingrese su nombre" )

console.log( Number( datoIngresado ) ) */

const respuesta = confirm('Acepta los terminos')

if( respuesta ){
    const nombreIngresado = prompt( "Ingrese su nombre" )
    console.log('Bienvenido ' + nombreIngresado )
}else{
    console.log('Adios')
}

