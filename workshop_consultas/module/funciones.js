export function filtrarNumerosPares( listaNumeros ){
    return listaNumeros.filter( numero => numero % 2 == 0 )
}

export function filtrarNumerosImpares( listaNumeros ){
    return listaNumeros.filter( numero => numero % 2 )
}

export function filtrarNumerosMayores( listaNumeros, numeroIngresado ){
    return listaNumeros.filter( numero => numero > numeroIngresado )
}

export function mostrarLi( listaNumeros, elemento ){

    let template = ""
    listaNumeros.forEach( numero => {
        template += `<li> ${numero} </li>`
    } )
    elemento.innerHTML = template

} 

export function filtrarNumeros( listaNumeros, condicion ){

    if( condicion == 'todos'){
        return listaNumeros
    }else if( condicion == 'pares' ){
        return filtrarNumerosPares( listaNumeros )
    }else{
        return filtrarNumerosImpares( listaNumeros )
    }

} 