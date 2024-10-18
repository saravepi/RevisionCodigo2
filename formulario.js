// Para declarar las variables se utlizó let ¡¡VAR YA NO SE USA EDUARDO!!
// Se agregó un ; a las líneas que lo requieren
let formulario = document.querySelector(".formulario"); // Se cambia a clase y se corrige el nombre de la clase



formulario.onsubmit = function (e) { // se agregó onsubmit

  e.preventDefault(); // Se agregó el preventDefault puesto que forma parte de la sintáxis

  // Cambio en el nombre de variables para mayor legibilidad
  let name = formulario.elements[0];
  let age = formulario.elements[1];
  let nationality = formulario.elements[2];

  let nombre = name.value;
  let edad = age.value;

  let i = nationality.selectedIndex;
  let nacionalidad = nationality.options[i].value;
  //console.log(nombre, edad) Se comentan para una mayor legibilidad, se utiliza para saber si esta funcionando el código en la consola
  //console.log(nacionalidad)

  if (nombre.length === 0) {
    name.classList.add("error");
  }
  if (edad < 18 || edad > 120) {
    age.classList.add("error");
  }

  if (nombre.length > 0 && edad > 18 && edad < 120) {
    agregarInvitado(nombre, edad, nacionalidad);
  }
};


/* Se eliminó esta parte del botón de eliminar invitado porque esta doble
let botonBorrar = document.createElement("button")
botonBorrar.textContent = "Eliminar invitado"
botonBorrar.id = "boton-borrar"

let corteLinea = document.createElement("br")
document.body.appendChild(corteLinea)
document.body.appendChild(botonBorrar);
*/

// Agregar invitado
function agregarInvitado(nombre, edad, nacionalidad) {

  if (nacionalidad === "ar") {
    nacionalidad = "Argentina"
  }
  else if (nacionalidad === "mx") {
    nacionalidad = "Mexicana"
  }
  else if (nacionalidad === "vnzl") {
    nacionalidad = "Venezolana"
  }
  else if (nacionalidad === "per") {
    nacionalidad = "Peruana"
  }

let lista = document.getElementById("lista-de-invitados"); 

let elementoLista = document.createElement("div");
elementoLista.classList.add("elemento-lista"); // es add
lista.appendChild(elementoLista);

/* Se eliminaría esta parte puesto que esta repetida en las siguientes líneas, aunque no estoy segura porque son diferentes en la línea 68 y 69

let spanNombre = document.createElement("span")
let inputNombre = document.createElement("input")
let espacio = document.createElement("br")
spanNombre.textContent = "Nombre: "
inputNombre.value = nombre 
elementoLista.appendChild(spanNombre)
elementoLista.appendChild(inputNombre)
elementoLista.appendChild(espacio)
*/

function crearElemento(descripcion, valor) {

let spanNombre = document.createElement("span");
let inputNombre = document.createElement("input");
let espacio = document.createElement("br");

spanNombre.textContent = descripcion + ": "
inputNombre.value = valor ;
elementoLista.appendChild(spanNombre);
elementoLista.appendChild(inputNombre);
elementoLista.appendChild(espacio);
}

crearElemento("Nombre", nombre);
crearElemento("Edad", edad);
crearElemento("Nacionalidad", nacionalidad);

// Agregamos botón de borrar
let botonBorrar = document.createElement("button");
botonBorrar.textContent = "Eliminar invitado"
botonBorrar.id = "boton-borrar"

let corteLinea = document.createElement("br");
elementoLista.appendChild(corteLinea);
elementoLista.appendChild(botonBorrar);


 botonBorrar.onclick = function() {
// this.parentNode.style.display = 'none';
botonBorrar.parentNode.remove();
  }
}