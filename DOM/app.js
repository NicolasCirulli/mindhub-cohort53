const $contenedor = document.getElementById('contenedor-main')

console.log( [ $contenedor  ])

// Para recuperar referencias
// document.getElementById('id') -> busca un nodo por ID
// document.querySelector( 'selector' ) -> busca un nodo por selector
// document.querySelectorAll( 'selector' ) -> Nos trae una NodeList con todos los nodos que encuentre


// innerText || textContent -> Podemos leer o modificar el texto que contiene un nodo

/* $contenedor.textContent = "Nuevo texto del main"

console.log( $contenedor.textContent ) */

/* Recupero el objeto que representa al lista ( <ul> ) */

/* 

let listaAlumnos = ""

for (const alumno of alumnos) {
    listaAlumnos += `<li> ${alumno} </li>`
}

console.log( listaAlumnos )

// innerHTML -> Podemos leer o modificar el html que contiene un nodo
$listaAlumnos.innerHTML = listaAlumnos

console.log( $contenedor.innerHTML ) 

*/

const $ul = document.getElementById('lista-alumnos')


const alumnos = ["Abel", "Angel", "Cristian", "Dalma", "Ricardo"]

function crearLi( item ){
    const $li = document.createElement( 'li' )
    /* <li> </li> */
    $li.textContent = item
    /* <li> alumno </li> */
    $li.classList.add("text-2xl", "text-red-600")
     /* <li class="text-2xl text-red-600"> alumno </li> */
    return $li
    /* retornar -> <li class="text-2xl text-red-600"> alumno </li> */
}

function imprimirLista( listaAlumnos, elemento ){
    /* borro todo el html que tiene dentro el elemento */
    elemento.innerHTML = ""
    /* Creo un fragment para poder guardar los <li> que voy creando en el bucle */
    const fragment = document.createDocumentFragment() /*Fragment: Es un nodo que solo vive en JS, cuando lo agregamos al DOM, desaparece */
    /* Recorro la lista de alumnos que llego por parametro */
    for (const alumno of listaAlumnos) {
        /* creo un <li> por cada alumno */
        const listItem = crearLi( alumno ) // <- <li class="text-2xl text-red-600"> alumno </li>
        /* Agrego ese <li> como hijo del fragment */
        /* Uso un fragment para no modificar directamente el DOM dentro de un bucle */
        /* Evito el problema de Reflow */
        fragment.appendChild( listItem ) 
    }
    /* Agrego el fragment como hijo del elemento que llego por parametro ( $ul )  */
    /* Como el fragment no llega nunca al DOM, solo se agregan los hijos del fragment */
    elemento.appendChild(fragment)
}
/* Ejecuto imprimir lista y le paso la lista de alumnos y el elemento donde imprimirlos */

imprimirLista( alumnos, $ul )






