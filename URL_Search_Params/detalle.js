const $containerMentor = document.getElementById("info-mentor")



const queryParams = new URLSearchParams( location.search  )
const id = queryParams.get( 'id' )


console.log( id )
const mentor = mentores.find( mentor => mentor.id == id ) 

console.log( mentor )
const numero = 20000000

$containerMentor.innerHTML = `

    <h2> nombre: ${mentor.nombre} </h2>
    <p> deuda : ￥${numero.toLocaleString()} </p>
    <p> deuda : ${numero.toLocaleString( 'ja-JP', { style:'currency', currency:'JPY' } )} </p>
    <p> modulo: ${mentor.modulo} </p>
    <p> edad: ${mentor.edad} </p>
    <img src="${mentor.imagen}" >

`