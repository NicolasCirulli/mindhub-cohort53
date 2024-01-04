const $lista = document.getElementById('lista-js')
const $inputBusqueda = document.getElementById('input-busqueda')
const $contenedorCheckboxes = document.getElementById('contenedorCheckboxes')
function imprimirLista(listaMentores, elemento) {

    elemento.innerHTML = ""

    const fragment = document.createDocumentFragment()

    for (const mentor of listaMentores) {
        const liMentor = crearLi(mentor)
        fragment.appendChild(liMentor)
    }

    elemento.appendChild(fragment)
}

function crearLi(mentor) {
    const li = document.createElement('li')
    li.textContent = mentor.nombre
    return li
}

const modulos = obtenerModulos(mentores)

$contenedorCheckboxes.innerHTML = modulos.reduce((templateAcumulado, modulo) => templateAcumulado += crearCheckbox(modulo), "")

imprimirLista(mentores, $lista)

$inputBusqueda.addEventListener("input", () => {
    const mentoresFiltrados = filtrarMentoresPorNombre(mentores, $inputBusqueda.value)
    const mentoresFiltradosPorModulo = filtrarMentoresPorModulo( mentoresFiltrados ) 
    imprimirLista(mentoresFiltradosPorModulo, $lista)
})


$contenedorCheckboxes.addEventListener('input', () => {
    const mentoresFiltrados = filtrarMentoresPorNombre(mentores, $inputBusqueda.value)
    const mentoresFiltradosPorModulo = filtrarMentoresPorModulo( mentoresFiltrados ) 
    imprimirLista(mentoresFiltradosPorModulo, $lista)
})


function filtrarMentoresPorNombre(listaMentores, nombreIngresado) {
    return listaMentores.filter(mentor => mentor.nombre.toLowerCase().includes(nombreIngresado.toLowerCase()))
}

function filtrarMentoresPorModulo(listaMentores) {
    const seleccionados = Array.from(document.querySelectorAll('input[type="checkbox"]:checked'))
        .map(input => input.value)
    if (seleccionados.length == 0) {
        return listaMentores
    }
    const mentoresFiltrados = listaMentores.filter(mentor => seleccionados.includes(mentor.modulo))
    return mentoresFiltrados
}

function obtenerModulos(listaMentores) {
    const modulos = listaMentores
        .map(mentor => mentor.modulo)
        .filter((modulo, indice, array) => array.indexOf(modulo) == indice)
    return modulos
}

function crearCheckbox(modulo) {
    return ` <label> ${modulo}
                <input type="checkbox" value="${modulo}" name="modulo" >
            </label>`
} 
