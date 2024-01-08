export function imprimirLista(listaMentores, elemento) {

    elemento.innerHTML = ""

    const fragment = document.createDocumentFragment()

    for (const mentor of listaMentores) {
        const liMentor = crearLi(mentor)
        fragment.appendChild(liMentor)
    }

    elemento.appendChild(fragment)
}

export function crearLi(mentor) {
    const li = document.createElement('li')
    li.textContent = mentor.nombre
    return li
}

export function filtrarMentoresPorNombre(listaMentores, nombreIngresado) {
    return listaMentores.filter(mentor => mentor.nombre.toLowerCase().includes(nombreIngresado.toLowerCase()))
}

export function filtrarMentoresPorModulo(listaMentores) {
    const seleccionados = Array.from(document.querySelectorAll('input[type="checkbox"]:checked'))
        .map(input => input.value)
    if (seleccionados.length == 0) {
        return listaMentores
    }
    const mentoresFiltrados = listaMentores.filter(mentor => seleccionados.includes(mentor.modulo))
    return mentoresFiltrados
}

export function obtenerModulos(listaMentores) {
    const modulos = listaMentores
        .map(mentor => mentor.modulo)
        .filter((modulo, indice, array) => array.indexOf(modulo) == indice)
    return modulos
}

export function crearCheckbox(modulo) {
    return ` <label> ${modulo}
                <input type="checkbox" value="${modulo}" name="modulo" >
            </label>`
} 
