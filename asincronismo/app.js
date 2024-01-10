console.log('inicio')


/* Peticiones HTTP */
/* FETCH */

fetch( 'https://valorant-api.com/v1/agents?language=es-MX' )
    .then( response => response.json() )
    .then( data => console.log( data ) )
    .catch( err => console.log( err ) )


console.log('fin')




/* Promesas */
/* function getMentorsList(nombreIngresado) {
    return new Promise((resolve, reject) => {
        const nombresAutorizados = ['Guille', 'Jose', 'Nicolas', 'Martin']

        if (nombresAutorizados.includes(nombreIngresado)) {
            resolve(mentores)
        }else{
            reject( 'Nombre no autorizado' )
        }
    })
}


getMentorsList( 'Nicolas' )
    .then( ( respuesta ) => { 
        const mentor = respuesta.find( mentor => mentor.modulo == "WEB" )
        const nombreMentor = mentor.nombre
        console.log( "CLG dentro del then:", nombreMentor )
     } )
    .catch( err => { console.log( "error en la promesa: ", err )} ) */

