/* console.log("js conectado") */

/* Bucles:
Son estructuras de codigo que se repiten varias veces siempre y cuando se cumpla una condicion */

/* for (let i = 0; i < 10; i++) {
   console.log(i)
    
} */

/* for (let i = 1; i <= 10; i++) {
    console.log(i)
} */

/* for (let i = 10; i > 0 ; i--) {
    console.log(i)
} */

const nros = [1,2,3,4,5,6,7,8,9]
const nombres = ["Tito","Toto","Renato","Carlos","Tomas","Timoteo","Ana"]

/* for (let i = 0; i < nros.length; i++) {
    console.log(nros[i])
    
} */

/* console.log(nros[0])
console.log(nros[1])
console.log(nros[2]) */

/* console.log(nros.length -1) */

/* for (let i = 0; i < nros.length; i++) {
        console.log(`el elemento: ${nros[i]} y tiene el indice :${i}`)
} */
/* for (let i = 0; i < nombres.length; i++) {
        console.log(nombres[i])
} */

/* for (let i = nombres.length -1; i >= 0; i--) {
    console.log(nombres[i])
} */

/* for (let i = 0; i < nombres.length; i++) {
   if (nombres[i].includes("T")) {
       console.log(nombres[i])
   }    
} */

/* for (let i = 0; i < nros.length; i++) {
    if(nros[i] == 4 || nros[i] == 6) continue
    console.log(nros[i])
} */

/* for (let i = 0; i < nros.length; i++) {
    console.log(nros[i])
    if(nros[i] == 4 || nros[i] == 6) break  
} */

/* function mostrarNumerosDesdeYHasta(desdeNro,hastaNro){

    for (let i = desdeNro; i <= hastaNro; i++) {
        console.log(i)
        
    }
}

mostrarNumerosDesdeYHasta(5,100) */

/* ------------------for of------------------------------ */

/* for (const numero of nros) {
    console.log(numero)
} */

const personajes = [
    {
      nombre:"Goku",
      serie_pelicula:"Dragon Ball",
      tipo:"Animado"
    },
    {
      nombre:"Luffy",
      serie_pelicula:"One Piece",
      tipo:"Animado"
    },
    {
      nombre:"Neo",
      serie_pelicula:"Matrix",
      tipo:"Humano"
    },
    {
      nombre:"Rambo",
      serie_pelicula:"Rambo",
      tipo:"Humano"
    }
  ] 

 /*  for (const personaje of personajes) {
    if (personaje.tipo == "Animado") {
        console.log(personaje)
    }    
  } */

 /*  const personajesAnimados = []

  for (const personaje of personajes) {
    if (personaje.tipo == "Humano") {
        personajesAnimados.push(personaje)
    }    
  }

  console.log(personajesAnimados) */

/*   function filtrarPorTipo(array,tipoP){
    const personajesFiltrados = []

    for (const personaje of array) {
      if (personaje.tipo == tipoP) {
          personajesFiltrados.push(personaje)
      }    
    }

    return personajesFiltrados
  }

console.log(filtrarPorTipo(personajes,"Animado"))
console.log(filtrarPorTipo(personajes,"Humano")) */

/* --------------- While ------------------------- */

/* let numero = 0

while (numero <= 5) {
    console.log(numero)
    numero += 1
} */

/* let nro = 5

while (nro >= 0) {
    console.log(nro)
    nro--
}
 */

/* let producto = " ";
const productos = []; 

while(producto && producto != "fin" ){
    producto=prompt("Ingrese producto y cuando termine ingrese fin")
    productos.push(producto)
}

console.log(productos) */

/* --------------- do while----------------------- */

/* let aux =0;

do {
    console.log("Aux esta en la vuelta :" + aux)
    aux++
} while (false); */

/* let password;

do {
    password = prompt("Ingrese una contraseña correcta")
} while (password !== "secreto");

console.log("Contraseña correcta") */

/* -----------------For in---------------------------- */

let persona = {
    nombre: 'Juan',
    apellido:'Perez',
    edad: 30,
    ciudad: 'Bs As'
  };
  
  for (let key in persona) {
    console.log(`${key} : ${persona[key]}`)}