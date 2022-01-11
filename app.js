const resta = document.getElementById("energia0")
let suma = document.getElementById("energia1")

let reiniciar = document.getElementById("reiniciar")
let siguiente = document.getElementById("sig")

let energias = document.getElementById("energias")

energias.innerText = 3

let mas = 2

if (energias.innerText = 5) {
  energias.classList.add("verde");
} 

//SUMAR 1

function sumar()     {
  energias.innerText = Number(energias.innerText) + 1
}

suma.onclick = () =>     {
    sumar()
}

//RESTAR 1

function restar()     {
  energias.innerText = Number(energias.innerText) - 1
}

resta.onclick = () =>     {
    restar()
}

//SIG RONDA

function sig()     {
  energias.innerText = Number(energias.innerText) + 2
}

siguiente.onclick = () =>     {
    sig()
}

//REINICIAR

function reset()  {
  energias.innerText = 3
}

reiniciar.onclick = () =>     {
  reset()
}

