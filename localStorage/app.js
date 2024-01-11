const $form = document.getElementById('form')
const $notas = document.getElementById('contenedor-notas')

let notas = JSON.parse( localStorage.getItem( 'notas' ) ) || []
console.log( notas )
imprimirNotas(notas, $notas, crearArticleNota)


$form.addEventListener('submit', (e) => {
    e.preventDefault()
    const data = Object.fromEntries(new FormData(e.target))
    data.id = Date.now()
    data.realizada = false
    notas.push(data)
    e.target.reset()
    localStorage.setItem( 'notas', JSON.stringify( notas ) )
    imprimirNotas(notas, $notas, crearArticleNota)
})

$notas.addEventListener('click', (e) => {
    const dataset = e.target.dataset
    if (dataset.accion == "terminada") {
        const nota = notas.find(nota => nota.id == dataset.id)
        nota.realizada = !nota.realizada
        imprimirNotas(notas, $notas, crearArticleNota)
    } else if (dataset.accion == "borrar") {
        /* const indiceNota = notas.findIndex( nota => nota.id == dataset.id )
        notas.splice( indiceNota, 1 ) */

        Swal.fire({
            title: "¿ Seguro que quiere eliminar la nota ? ",
            showDenyButton: false,
            showCancelButton: true,
            confirmButtonText: "Si",
          }).then((result) => {
            if (result.isConfirmed) {
                notas = notas.filter(nota => nota.id != dataset.id)
                localStorage.setItem( 'notas', JSON.stringify( notas ) )
                e.target.parentElement.parentElement.remove() 
                Swal.fire("Eliminada con exito", "", "success");
            }
          });  
    }
})

function imprimirNotas(lista, elemento, fn) {
    let template = ""
    for (const elemento of lista) {
        template += fn(elemento)
    }
    elemento.innerHTML = template
}

function crearArticleNota({ titulo, descripcion, realizada, id }) {
    const aux = realizada ? "line-through" : ""
    const colorBtn = realizada ? "bg-green-600 text-white" : "bg-gray-700 text-white"
    return `<article class="min-w-[320px] w-3/4 lg:w-1/4 flex flex-col gap-3 items-center px-5 border">
    <h3 class="${aux}" > ${titulo} </h3>
    <p class="${aux}" > ${descripcion} </p> 
    <div class="flex gap-5">
        <button data-accion="terminada" data-id="${id}" class="w-[100px] ${colorBtn} p-2 rounded"> ${realizada ? "Completada" : "En proceso"} </button>
        <button data-accion="borrar" data-id="${id}" class="w-[100px] bg-red-600 p-2 text-white rounded">Borrar</button>
    </div>
</article>`
}