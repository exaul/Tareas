// variables del numero secreto 
const ns = Math.floor(Math.random() * 10) + 1;
let int = 0;
let adiv = false;

function juego() {
  while (!adiv) {
    let num = parseInt(prompt("Ingrese un numero "));

    if (isNaN(num) || num < 1 || num > 10) {
      alert("Numero invalido");
      continue;
    }

    int++;

    if (num === ns) {
      adiv = true;
      alert(`¡Haz salvado tu pc por ahora!\nEl número secreto era: ${ns}\nIntentos: ${int}`);
    } else if (num < ns) {
      alert("El número es demasiado bajo. Intenta con un número más alto.");
    } else {
      alert("El número es demasiado alto. Intenta con un número más bajo.");
    }
  }
}

juego();