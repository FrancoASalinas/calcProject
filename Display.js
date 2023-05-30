class Display{
    constructor(displayAnterior, displayActual){ //referencia a los dos "inputs"
        this.displayAnterior = displayAnterior;
        this.displayActual = displayActual;
        this.calculador = new Calculadora();
        this.valorAnterior = '';//son los strings que se van a mostrar en sus respectivos displays
        this.valorActual = '';
        this.tipoOperacion = undefined;//luego es modificado por el metodo computar, para utilizarse en el metodo calcular
        this.signos= {  //es el signo que se mostrara en el input, es recibido como parametro en imprimirValores, llamado por tipoOperacion
            sumar: '+',
            restar: '-',
            multiplicar: 'x',
            dividir: '%'
        }
    }
    agregarNumero(numero){ //referencia al valor de cada boton
        if (numero === '.' && this.valorActual.includes('.'))return //si se quiere poner un punto y ya existe un punto retornar nada
        this.valorActual = this.valorActual.toString()+ numero.toString(); //se agrega el valor del boton al input valor actual, es decir se imprime el numero
        this.imprimirValores() //se actualiza el valor actual
    }
    borrar(){
        this.valorActual = this.valorActual.toString().slice(0, -1); //el nuevo valor actual es valor actual desde el primer caracter hasta el anteultimo
        this.imprimirValores() //se actualiza el valor actual
    }
    borrarTodo(){
        this.valorActual = '';
        this.valorAnterior = '';
        this.tipoOperacion = undefined; //todos los valores se reinician
        this.imprimirValores(); //los valores se actualizan
    }
    calcular(){
        const valorAnterior = parseFloat(this.valorAnterior); //valor anterior y valor actual(que eran strings) se parsean a numeros.Ademas ignoran los operadores.
        const valorActual = parseFloat(this.valorActual);
        if(isNaN(valorAnterior)||isNaN(valorActual)) return //si alguno de los valores no es un numero, no hacer nada. los dos valores deben tener numeros
        this.valorActual = this.calculador[this.tipoOperacion](valorAnterior, valorActual) //el valor actual es: el calculo de la operacion recibida por tipoOperacion, que toma
                                                                                            //como parametros los numeros anteriormente parseados a numeros.
    }
    computar(tipo){
        this.tipoOperacion !== 'igual' && this.calcular(); // si el tipo de operacion es distinto a igual, llamar a la funcion calcular
        this.tipoOperacion = tipo; // el tipoOperacion es igual al value del boton
        this.valorAnterior = this.valorActual || this.valorAnterior; //el valor anterior es igual al valor actual o al valor anterior
        this.valorActual = ''; //el valor actual se resetea, ya que si existía, ahora se muestra en el valorAnterior
        this.imprimirValores(); //se actualizan los inputs
    }
    imprimirValores(){
        this.displayActual.textContent = this.valorActual  //se actualizan los valores segun se hayan modificado por los metodos anteriores
        this.displayAnterior.textContent = `${this.valorAnterior}${this.signos[this.tipoOperacion] || ''}` //este valor ademas se concatena con el tipoOperacion o nada.
    }
}