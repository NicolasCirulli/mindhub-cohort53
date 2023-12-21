// Declaracion de funcion
function sumar( parametro, parametroDos  ){
    const suma = parametro + parametroDos  
    return suma
}

const resultadoUno = sumar( 15, 20 )

/* let y const -> scope de bloque, alcance de bloque */
/* var alcance local / de funcion */

// Expresion de funcion
// Si la funcion no tiene nombre, la llamamos funcion anonima
const fnSumar = function( numero, numeroDos  ){
    return numero + numeroDos
}

/* console.log( fnSumar( 200, 300 )  ) */

const objectoCalculadora = {
    sumar: function( num, num2 ){
        return num + num2
    },
    restar: function( num, num2 ){
        return num - num2
    },
    multiplicar: function( num, num2 ){
        return num * num2
    },
    dividir( num, num2 ){
        return num / num2
    }
}




function pedirDatos(){
    const operacionIngresado = prompt( "Ingrese una operacion: sumar, restar, multiplicar, dividir" )
    const numeroUnoIngresado = Number( prompt( "Ingrese el primer numero ( del 1 al 1000 )" ) )
    const numeroDosIngresado = Number( prompt( "Ingrese el segundo numero ( del 1 al 1000 )" ) )

    const datosDeLaOperacion = {
        operacion : operacionIngresado,
        primerNumero: numeroUnoIngresado,
        segundoNumero: numeroDosIngresado
    }

    return datosDeLaOperacion
}

function verificarRango( numero, inicioRango, finRango ){
    return numero >= inicioRango && numero <= finRango
}

function calculadora( operacion, numeroUno, numeroDos ){
    switch ( operacion ) {
        case "sumar":
            return `El resultado es: ${numeroUno + numeroDos}`
        case "restar":
            return `El resultado es: ${numeroUno - numeroDos}` 
        case "multiplicar":
            return `El resultado es: ${numeroUno * numeroDos}` 
        case "dividir":
            return `El resultado es: ${numeroUno / numeroDos}` 
        default:
            return "Operacion no valida"
    }
}

// procedimiento
function realizarOperacion(){
    
    const datosParaOperar = pedirDatos() 
    const numeroUnoValido = verificarRango( datosParaOperar.primerNumero, 1, 1000 )
    const numeroDosValido = verificarRango( datosParaOperar.segundoNumero, 1, 1000 )
    if( numeroUnoValido && numeroDosValido ){
        const resultado = calculadora( datosParaOperar.operacion, datosParaOperar.primerNumero, datosParaOperar.segundoNumero )
        console.log( resultado )
    }else{
        console.log( 'Los numeros no cumplen con los requisitos' )
    }

}






