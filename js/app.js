
// Objeto para almacenar y mostrar la información
const simulador = {
    numeros: [],
    resultado: 0,
    operacion: '',
  
    // Función para realizar el cálculo
    calcular: function(operacion) {
      // Reiniciar el arreglo de números
      this.numeros = [];
  
      // Pedir entrada al usuario
      let cantidadNumeros = parseInt(prompt('Ingresa la cantidad de números:'));
  
      // Pedir los números al usuario
      for (let i = 1; i <= cantidadNumeros; i++) {
        let numero = parseInt(prompt('Ingresa el número #' + i + ':'));
        this.numeros.push(numero);
      }
  
      // Realizar el cálculo según la operación
      if (operacion === 'suma') {
        this.resultado = this.sumar();
        this.operacion = 'suma';
      } else if (operacion === 'resta') {
        this.resultado = this.restar();
        this.operacion = 'resta';
      }
  
      // Mostrar el resultado
      alert('El resultado de la ' + this.operacion + ' es: ' + this.resultado);
    },
  
    // Función para sumar los números del arreglo
    sumar: function() {
      return this.numeros.reduce((total, numero) => total + numero, 0);
    },
  
    // Función para restar los números del arreglo
    restar: function() {
      return this.numeros.reduce((total, numero) => total - numero);
    }
  };
  
  // Llamar a la función del simulador con la operación deseada (puede ser 'suma' o 'resta')
  simulador.calcular('suma');
  