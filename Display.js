class Display {
  constructor(displayAnterior, displayActual) {
    this.displayAnterior = displayAnterior;
    this.displayActual = displayActual;
    this.calculador = new Calculadora();
    this.valorAnterior = '';
    this.valorActual = '';
    this.tipoOperacion = undefined;
    this.signos = {
      sumar: '+',
      restar: '-',
      multiplicar: 'x',
      dividir: '%',
    };
  }
  agregarNumero(numero) {
    if (numero === '.' && this.valorActual.includes('.')) return;
    this.valorActual = this.valorActual.toString() + numero.toString();
    this.imprimirValores();
  }
  borrar() {
    this.valorActual = this.valorActual.toString().slice(0, -1);
    this.imprimirValores();
  }
  borrarTodo() {
    this.valorActual = '';
    this.valorAnterior = '';
    this.tipoOperacion = undefined;
    this.imprimirValores();
  }
  calcular() {
    const valorAnterior = parseFloat(this.valorAnterior);
    const valorActual = parseFloat(this.valorActual);

    if (isNaN(valorAnterior) || isNaN(valorActual)) return;
    this.valorActual = this.calculador[this.tipoOperacion](
      valorAnterior,
      valorActual
    );
  }
  computar(tipo) {
    this.tipoOperacion !== 'igual' && this.calcular();
    this.tipoOperacion = tipo;
    this.valorAnterior = this.valorActual.toString() || this.valorAnterior;
    this.valorActual = '';
    this.imprimirValores();
  }
  imprimirValores() {
    this.displayActual.textContent = this.valorActual;
    this.displayAnterior.textContent = `${this.valorAnterior} ${
      this.signos[this.tipoOperacion] || ''
    }`;
  }
}
