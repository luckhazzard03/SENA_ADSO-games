// Definición de la clase Calculadora
class Calculadora {
  /*Metodo Constructor para inicializar propiedades que ejecuta automaticamente cuando se crea una
   nueva instancia de la clase*/
  constructor() {
    /* busca en el documento html el Elemento que tenga la clase "pantalla"
     del DOM que representa la pantalla de salida*/
    this.pantalla = document.querySelector(".pantalla");
    // Se asignan a la propiedad botones del objeto actual "Nodelist".
    this.botones = document.querySelectorAll(".btn");
    // Inicializar eventos para cada botón
    this.inicializarEventos();
     // Agregar evento de teclado "se ingresa por teclado los valores"
    document.addEventListener("keydown", (event) => {
    this.manejarTeclaPresionada(event.key);
  });
  }

  // Método para manejar la lógica de las teclas presionadas
  manejarTeclaPresionada(tecla) {
    /*evalúa si la tecla presionada es un número (mediante la función isNaN que devuelve true si el valor no 
    es un número), el punto decimal, o alguno de los operadores matemáticos como suma, resta, multiplicación
    o división. */
    if (!isNaN(tecla) || tecla === "." || tecla === "+" || tecla === "-" || tecla === "*" || tecla === "/") {
      /*Si la condición del primer if se cumple, entonces se llama al método actualizarPantalla() de la calculadora,
      pasando como argumento la tecla presionada para actualizar el contenido en pantalla. */
      this.actualizarPantalla(tecla);
      /* En caso de que la tecla presionada sea la tecla "Enter" (que representa la ejecución de la operación 
      matemática), se ejecuta el bloque de código dentro de este else if.*/
    } else if (tecla === "Enter") {
      this.ejecutarOperacion();
    // eliminar un carácter de la pantalla de la calculadora.
    } else if (tecla === "Backspace") {
      this.borrarPantalla();
    }
  }

  // Método para asignar eventos de clic a cada botón "se define el METODO"
  inicializarEventos() {
    //Se utiliza el método forEach para recorrer cada elemento del NodeList botones.
    this.botones.forEach(boton => {
      //Para cada botón, se agrega un escuchador de eventos que estará atento al evento de clic.
      boton.addEventListener("click", () => {        
        //se llama al método manejarBoton y se pasa como argumento el botón al que se le hizo clic.
        this.manejarBoton(boton);
      });
    });
  }

  // se define el Método función para borrar un carácter de la pantalla
  borrarPantalla() {
    /*se realiza una condición con un bloque if. Se verifica si la longitud del texto en la pantalla 
    es igual a 1 o si el texto en la pantalla es igual a "Error!". Si alguna de estas condiciones
    se cumple, se ejecuta el bloque de código dentro de las llaves.*/
    if (this.pantalla.textContent.length === 1 || this.pantalla.textContent === "Error!") {
      /*Si se cumple la condición anterior, se establece el contenido de la pantalla como "0". 
      Esto hace que reinicie la pantalla si solo queda un carácter o si muestra un mensaje de error.*/
      this.pantalla.textContent = "0";

    /*Si la condición del if no se cumple, se ejecuta este bloque. Aquí se utiliza
    el método slice para eliminar el último carácter del texto que está en la pantalla.*/
    } else {
      
      this.pantalla.textContent = this.pantalla.textContent.slice(0, -1);
    }
  }

  // Método función para ejecutar la operación matemática ingresada en la pantalla
  ejecutarOperacion() {
    // Se almacena en la variable por pantalla
    const operacion = this.pantalla.textContent;
    //Verifica si el contenido de la pantalla incluye la cadena "/0", lo que indicaría una división por cero.
    if (operacion.includes("/0")) {
      // Si se encuentra "/0" en la operación, se muestra un mensaje de error por  pantalla.
      this.pantalla.textContent = "Error! División por cero";
      //Si no se encuentra "/0", se ejecuta el bloque de código siguiente.
    } else {
      //Se inicia un bloque "try", que permite capturar errores durante la ejecución del código dentro de él.
      try {        
        /*se utiliza la función eval() para evaluar la operación introducida por el usuario y se almacena
         sea suma, resta, multiplicación o división el resultado en la variable resultado*/
        const resultado = eval(operacion);
        // Verifica si el resultado es un número finito utilizando el método estático Number.isFinite().
        if (Number.isFinite(resultado)) {
          // Si el resultado es finito, se muestra en la pantalla.
          this.pantalla.textContent = resultado;
        
        //Si el resultado no es finito, se ejecuta el bloque de código siguiente.  
        } else {
          //Se muestra un mensaje de error por pantalla indicando que el resultado no es válido.
          this.pantalla.textContent = "Error! Resultado no válido";
        }
        
      //Se inicia un bloque "catch" para manejar cualquier error que ocurra dentro del bloque "try".  
      } catch {
        //Si ocurre un error durante la evaluación de la operación, se muestra un mensaje de error en la pantalla.
        this.pantalla.textContent = "Error! Operación inválida";
      }
    }
  }

  // Método para actualizar el contenido de la pantalla
  actualizarPantalla(valor) {
    if (this.pantalla.textContent === "0" || this.pantalla.textContent === "Error!") {
      this.pantalla.textContent = valor;
    } else {
      //concatena o agrega el valor especificado al contenido actual que se muestra en la pantalla.
      this.pantalla.textContent += valor;
    }
  }

  // Método que maneja la lógica de los botones
  manejarBoton(boton) {
    //Se obtiene el texto contenido en el botón que fue presionado y se guarda en la variable botonApretado.
    const botonApretado = boton.textContent;

    // Evaluar el ID del botón para determinar la acción
    if (boton.id === "c") {
      /*se establece el contenido de la pantalla como "0"
      reiniciando la calculadora o borrando todo lo mostrado.*/
      this.pantalla.textContent = "0";
    /*Se verifica si el ID del botón es "borrar". Si es así, se llama al método borrarPantalla(),
     que borra un carácter de la pantalla.*/
    } else if (boton.id === "borrar") {
      this.borrarPantalla();
    //se evalúa si el ID del botón es "igual". Si es así, se llama al método ejecutarOperacion()
    } else if (boton.id === "igual") {
      this.ejecutarOperacion();
    /* Si ninguna de las condiciones anteriores se cumple, se llama al método actualizarPantalla
    pasándole como argumento el texto contenido en el botón presionado (botonApretado).*/
    } else {
      this.actualizarPantalla(botonApretado);
    }
  }
}

// Crear una instancia de la calculadora al cargar el DOM
document.addEventListener("DOMContentLoaded", function () {
  const calculadora = new Calculadora();
});
