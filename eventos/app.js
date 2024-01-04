/* const $contenedor = document.getElementById('contenedor')

function handleClick( objectoInfoEvento ){
    const listaClases = objectoInfoEvento.target.classList

    if( listaClases.contains( "cursor-pointer" ) ){
        listaClases.toggle( "rounded-full" )
    }
}

$contenedor.addEventListener( "click", handleClick ) */ // -> handleClick( {} )




const cuadradosBordeAzul = document.querySelectorAll( '#contenedor .cursor-pointer' )
console.log( cuadradosBordeAzul )
function fnForEach (div){
    
    div.addEventListener( 'click', () => {
        div.classList.toggle( "rounded-full" )
    } )

}



cuadradosBordeAzul.forEach( fnForEach )