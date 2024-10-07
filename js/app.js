/*1) Recorrer el array e insertar dichos valores en el localstorage. El key de cada valor 
corresponderá a variable + i siendo i el indice en el que se encuentra el array.*/

const array = ["Joaquin", 1, ["Hola","Adios"], true]
for (let i = 0; i < array.length; i++) {
    let arrayElements = array[i];
  
      //con stringify convierte el objeto o array a string
    localStorage.setItem(i, JSON.stringify(arrayElements)); //
  }

  /*2) Recorrer de 0 a la longitud del array y hacer la peticion de variable + i del localstorage */
  for (let i = 0; i < array.length; i++) {
    let rescueValue = localStorage.getItem(i);
    //con JSON.parse convierte el valor a su valor original 
    console.log(JSON.parse(rescueValue));
  }
//3) Crear un div por cada variable e insertar el valor de dicha variable en el div

let divName = document.createElement("div");
let divNumber = document.createElement("div");
let divArray = document.createElement("div");
let divBoolean = document.createElement("div");

divName.textContent = JSON.parse(localStorage.getItem("0"));
divNumber.textContent = JSON.parse(localStorage.getItem("1"));
divArray.textContent = JSON.parse(localStorage.getItem("2"));
divBoolean.textContent = JSON.parse(localStorage.getItem("3"));

//4) insertar estos divs en el body del html
let body = document.querySelector("body");

body.appendChild(divName);
body.appendChild(divNumber);
body.appendChild(divArray);
body.appendChild(divBoolean);