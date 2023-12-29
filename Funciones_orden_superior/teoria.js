/* saludar() */
// Declaracion de funcion
function saludar() {
  console.log("Hola");
}

// expresion de funcion
const saludarAnonima = function () {
  console.log("Hola");
};

// Funciones flecha
// Funcion flecha, son siempre anonimas, no se pueden usar con this, no tienen disponible arguments
const saludarFlecha = () => {
  console.log("Hola");
};
/* 
saludarAnonima()
saludarFlecha()

console.log( saludar )
console.log( saludarFlecha ) */

/* Si la funcion tiene una sola instruccion, puedo quitar las llaves y el return se da por implicito */
const multiplicar = (num1, num2) => num1 * num2;

/* console.log( multiplicar( 10, 10 ) ) */

/* Si la funcion tiene 1 solo parametro se pueden sacar los parentesis */
const multiplicarPorVeinte = (num) => num * 20;

/* console.log( multiplicarPorVeinte(10) ) */

/* Funcion recursiva */
function contarHasta100(num) {
  if (num > 100) return;
  console.log(num);
  contarHasta100(num + 1);
}

// Funciones de orden superior
/* Para ser de orden superior tienen que cumplir con 1 de estos 2 requisitos:
    Recibir una funcion por sus parametros 
    Retornar una funcion 
*/

function sumar(a, b) {
  return a + b;
}

const restar = function (a, b) {
  return a - b;
};

function calculadora(num1, operacion, num2) {
  return operacion(num1, num2);
}

const resultadoSuma = calculadora(10, (a, b) => a + b, 20);

const resultadoResta = calculadora(30, (a, b) => a - b, 15);

const resultadoProducto = calculadora(100, (a, b) => a * b, 200);

const resultadoDivision = calculadora(200, (a, b) => a / b, 100);

/* console.log( "Suma: ", resultadoSuma )

console.log( "Restar: ", resultadoResta )

console.log( "Multiplicar: ", resultadoProducto )

console.log( "Dividir: ", resultadoDivision ) */

// Metodos de array ( de orden superior )

const alumnos = ["Abel", "Ricardo", "Cristian", "Dalma", "Angel"];

const mentores = [
  {
    nombre: "Nicolás",
    edad: 28,
    imagen:
      "https://media.a24.com/p/2f03afb012001e9fc01f018246cf260f/adjuntos/296/imagenes/008/936/0008936452/1200x675/smart/gatosjpg.jpg",
    tecnologias: [
      "HTML",
      "CSS",
      "JavaScript",
      "NodeJS",
      "ReactJS",
      "React Native",
      "VueJS",
    ],
    modulo: "JS",
  },
  {
    nombre: "Lucrecia",
    edad: 27,
    imagen:
      "https://assets.elanco.com/8e0bf1c2-1ae4-001f-9257-f2be3c683fb1/fca42f04-2474-4302-a238-990c8aebfe8c/Siamese_cat_1110x740.jpg",
    tecnologias: [
      "HTML",
      "CSS",
      "JavaScript",
      "NodeJS",
      "ReactJS",
      "React Native",
    ],
    modulo: "JS",
  },
  {
    nombre: "Federico",
    edad: 38,
    imagen:
      "https://t1.uc.ltmcdn.com/es/posts/9/2/0/cuales_son_los_cuidados_de_un_border_collie_52029_600.jpg",
    tecnologias: ["HTML", "CSS", "JavaScript", "Java", "VueJS"],
    modulo: "JS",
  },
  {
    nombre: "Camila",
    edad: 28,
    imagen: "https://www.diarioveterinario.com/images/showid2/4315158?w=900",
    tecnologias: ["HTML", "CSS", "JavaScript", "Bootstrap"],
    modulo: "WEB",
  },
  {
    nombre: "Kevin",
    edad: 32,
    imagen:
      "https://http2.mlstatic.com/D_NQ_NP_815225-MLA45630776962_042021-O.jpg",
    tecnologias: ["HTML", "CSS", "JavaScript", "React"],
    modulo: "WEB",
  },
  {
    nombre: "Flor",
    edad: 32,
    imagen:
      "https://p4.wallpaperbetter.com/wallpaper/630/552/841/look-kitty-background-baby-wallpaper-preview.jpg",
    tecnologias: ["HTML", "CSS", "JavaScript", "VueJS"],
    modulo: "WEB",
  },
  {
    nombre: "Guillermo",
    edad: 40,
    imagen:
      "https://previews.123rf.com/images/serkucher/serkucher1803/serkucher180300592/97754022-gato-gris-brit%C3%A1nico-derecho-en-un-fondo-blanco-gato-de-raza-pura-gatito-bien-cuidado-concepto.jpg",
    tecnologias: ["Java", "VueJS"],
    modulo: "JAVA",
  },
  {
    nombre: "Martin",
    edad: 32,
    imagen:
      "https://images.unsplash.com/photo-1603396828513-190e5e170e2a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDEwfHx8ZW58MHx8fHw%3D&w=1000&q=80",
    tecnologias: ["JavaScript", "Java", "VueJS"],
    modulo: "JAVA",
  },
  {
    nombre: "Elias",
    edad: 22,
    imagen: "https://definicion.de/wp-content/uploads/2015/01/tortuga.png",
    tecnologias: ["JavaScript", "ReactJS", "Java", "VueJS"],
    modulo: "JAVA",
  },
  {
    nombre: "Sebastian",
    edad: 24,
    imagen:
      "https://diariodeavisos.elespanol.com/wp-content/uploads/2018/02/gato-gris-negro-1.jpg",
    tecnologias: ["JavaScript", "Java", "VueJS", "NodeJS"],
    modulo: "JAVA",
  },
];

/* console.log( alumnos ) */

// forEach

/* console.log( alumnos ) */

/* Recorre el array, ejecuta la funcion que le pasamos una vez por cada elemento y no retorna nada */
/* function mostrarNombres(alumno){
    console.log( "hola "+ alumno )
} 
alumnos.forEach( mostrarNombres )  */

/*
    mostrarNombres( "Abel", 0, ["Abel", "Angel", "Cristian", "Dalma", "Ricardo"] )
    mostrarNombres( "Angel", 1, ["Abel", "Angel", "Cristian", "Dalma", "Ricardo"] )
    mostrarNombres( "Cristian", 2, ["Abel", "Angel", "Cristian", "Dalma", "Ricardo"] )
    mostrarNombres( "Dalma", 3, ["Abel", "Angel", "Cristian", "Dalma", "Ricardo"] )
    mostrarNombres( "Ricardo", 4, ["Abel", "Angel", "Cristian", "Dalma", "Ricardo"] )
*/

// map
/* Recorrer el array, ejecutar la funcion 1 vez por cada elemento, y guardar los return 
    en un nuevo array, al terminar nos retorna ese nuevo array
*/

function mapMentores(mentores, fn) {
  const result = [];
  for (const mentor of mentores) {
    const retornoFn = fn(mentor);
    result.push(retornoFn);
  }
  return result;
}

const nombresAlumnosEnMayuscula = alumnos.map((alumno) => alumno.toUpperCase());

/* console.log( alumnos )
console.log( nombresAlumnosEnMayuscula ) */

const nombresMentores = mentores.map((mentor) => mentor.nombre);
const edadesMentores = mentores.map((mentor) => mentor.edad);
const presentacionesMentores = mentores.map(
  (mentor) =>
    `Hola soy ${mentor.nombre} y tengo ${mentor.edad} años, estoy en el modulo ${mentor.modulo}`
);

/* console.log( mentores )
console.log( nombresMentores )
console.log( edadesMentores ) */
/* console.log( presentacionesMentores ) */

/* 
    let result = []
    
    result.push( fnMap( "Abel", 0, ["Abel", "Angel", "Cristian", "Dalma", "Ricardo"] ) )
    result.push( fnMap( "Angel", 1, ["Abel", "Angel", "Cristian", "Dalma", "Ricardo"] ) )
    result.push( fnMap( "Cristian", 2, ["Abel", "Angel", "Cristian", "Dalma", "Ricardo"] ) )
    result.push( fnMap( "Dalma", 3, ["Abel", "Angel", "Cristian", "Dalma", "Ricardo"] ) )
    result.push( fnMap( "Ricardo", 4, ["Abel", "Angel", "Cristian", "Dalma", "Ricardo"] ) ) 

    return result
*/

function filtrarMentores(mentores, fn) {
  const result = [];
  for (const mentor of mentores) {
    const retornoFn = fn(mentor);
    if (retornoFn) {
      result.push(mentor);
    }
  }
  return result;
}

// filter
/* console.log(mentores); */
const mentoresMayoresA25 = mentores.filter((mentor) => mentor.edad >= 25);
/* console.log(mentoresMayoresA25); */

const nombreMentoresJSConE = mentores
  .filter((mentor) => mentor.modulo == "JS" && mentor.nombre.includes( 'e' ))
  .map((mentor) => mentor.nombre)
  .join(' - ')


/* console.log(nombreMentoresJSConE); */

// find

const primerMentorMayorA30 = mentores.find( mentor => mentor.edad > 30 )
/* console.log( primerMentorMayorA30 ) */

// some

const algunoEsMayorA30 = mentores.some( mentor => mentor.edad > 30 )
/* console.log( algunoEsMayorA30 ) */
// every

const todosSonMayoresA30 = mentores.every( mentor => mentor.edad > 20 )
/* console.log( todosSonMayoresA30 ) */

// toSorted
/* ordenar */
const numeros = [ 1, 20, 10, 3, 2, 5, 6, 12 ]
const ordenados = numeros.toSorted( (a,b) => b - a ) 
/* console.log( ordenados )

console.log( alumnos.toSorted( (a,b) => b.localeCompare(a) ) )
console.log( mentores ) */
const mentoresOrdenadosPorEdad = ordenarMentores( mentores, 'edad' )
const mentoresOrdenadosPorNombre = ordenarMentores( mentores, 'nombre' )
const mentoresOrdenadosPorModulo = ordenarMentores( mentores, 'modulo' )
function ordenarMentores( mentores, propiedad ){
    return mentores.toSorted( (a,b) => {
        if( a[propiedad] < b[propiedad] ){
            return - 1
        }else if( a[propiedad] > b[propiedad] ){
            return 1
        }
        return 0
    } )
} 

/* console.log( mentoresOrdenadosPorEdad )
console.log( mentoresOrdenadosPorNombre )
console.log( mentoresOrdenadosPorModulo ) */

// reduce

const fnReduce = ( acumulador, numero) => {
    console.log( `Acumulador: `, acumulador )
    console.log( `numero: `, numero )
    console.log( "" )
    return numero + acumulador
} 

const sumaNumeros = numeros.reduce( fnReduce, 0 )

console.log( "Resultado reduce:", sumaNumeros )

