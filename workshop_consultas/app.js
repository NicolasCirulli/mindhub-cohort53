import {
    mostrarLi, 
    filtrarNumerosMayores,  
    filtrarNumeros
    } 
from './module/funciones.js'
const $lista = document.getElementById( 'lista' )
const $search = document.querySelector( 'search' )
const $select = document.getElementById('select')
const numeros = [ 1,2,3,4,5,6,7,8,9,10 ]
const options = [ 0,1,2,3,4,5,6,7,8,9 ]

$select.innerHTML = options
    .reduce( ( template, numero ) => template += ` <option value="${numero}">${numero}</option>`, '' )


$search.addEventListener( 'input', () =>{
    const numerosMayores = filtrarNumerosMayores( numeros, Number( $select.value ))
    const checked = document.querySelector( 'input[type=radio]:checked' )
    const numerosFiltrados = filtrarNumeros( numerosMayores, checked.value )
    mostrarLi( numerosFiltrados, $lista )
})

mostrarLi( numeros, $lista )