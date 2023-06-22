const number = document.querySelectorAll('.number');
const operator = document.querySelectorAll('.operator');
const erase = document.querySelector('.erase');
const reset = document.querySelector('.reset');
const displayActual = document.querySelector('.valor-actual');
const displayAnterior = document.querySelector('.valor-anterior');

const display = new Display(displayAnterior, displayActual);

number.forEach((boton) =>
  boton.addEventListener('click', () => display.agregarNumero(boton.innerHTML))
);

operator.forEach((boton) =>
  boton.addEventListener('click', () => display.computar(boton.value))
);

erase.addEventListener('click', () => display.borrar());

reset.addEventListener('click', () => display.borrarTodo());
