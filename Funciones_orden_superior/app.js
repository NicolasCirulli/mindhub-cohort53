const $contenedor = document.getElementById( 'contenedor-main' )

const fnReduce = ( acumulador, agente ) =>  acumulador += crearArticle( agente )

fetch( 'https://valorant-api.com/v1/agents?language=es-MX' )
    .then( response => response.json() )
    .then( agentes => {
        const agentesJugables = agentes.data.filter( agente => agente.isPlayableCharacter )
        $contenedor.innerHTML += agentesJugables.reduce( fnReduce , "" )
    }  )
    .catch( err => console.log( err ) )


    

function crearArticle( parametro ){
    return ` 
    <article class="flex flex-col gap-3 w-full h-[700px] md:w-5/12 xl:w-3/12 border p-5 shadow-lg">
        <img class="h-2/3 object-cover object-top" src="${parametro.fullPortraitV2}" alt="Foto de parametro ${parametro.displayName}">
        <h2 class="font-semibold text-xl pt-3">${parametro.displayName}</h2>
        <p>${parametro.description}</p>
    </article>
`
}
