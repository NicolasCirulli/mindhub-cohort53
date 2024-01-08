import {obtenerModulos, crearCheckbox,imprimirLista, filtrarMentoresPorNombre, filtrarMentoresPorModulo } from './module/funciones.js'
const $lista = document.getElementById('lista-js')
const $inputBusqueda = document.getElementById('input-busqueda')
const $contenedorCheckboxes = document.getElementById('contenedorCheckboxes')


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
