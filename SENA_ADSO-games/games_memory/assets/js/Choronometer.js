/*
Author:ING. DIEGO CASALLAS
Date:13/04/2024
Description:
*/
//Define la clase llamada Choronometer, que se utiliza para crear un cronómetro en la página web.
class Choronometer {
  // Método constructor que recibe tres parámetros (choronometerId, speed, maxMilliseconds)
  constructor(choronometerId, speed, maxMilliseconds) {
    //se inicializa y busca el elemento HTML en el documento con el ID proporcionado y se almacena en this.objChoronometer.
    this.objChoronometer = document.getElementById(choronometerId);
    // Se inicializan los elementos label dentro del elemento this.objChoronometer y se almacenan en this.getElementsLabel.
    this.getElementsLabel = this.objChoronometer.querySelectorAll("label");
    //se inicializan las variables para el cronómetro
    this.conT = 0;
    this.seconds = "00";
    this.minutes = "00";
    this.hourd = "00";
    this.secondsAux = 0;
    this.minutesAux = 0;
    this.hourdAux = 0;
    /*Se asignan los valores de velocidad y tiempo máximo, y se inicializa una variable intervalID para 
	almacenar el ID del intervalo que controla la actualización del cronómetro.*/
    this.speed = speed;
    this.maxMilliseconds = maxMilliseconds;
    this.intervalID;
    this.progress = 0; // Inicializa el progreso en 0
    this.progressBar = document.getElementById("progressBar"); // Obtén la barra de progreso
  }
  //método comienza el cronómetro.
  startChoronometer() {
    this.intervalID = setInterval(() => {
      this.seconds = this.secondsAux.toString().padStart(2, "0");
      this.getElementsLabel[2].innerHTML = this.seconds;
      this.secondsAux++;

      if (this.secondsAux == 60) {
        this.minutesAux++;
        this.secondsAux = 0;
      }

      this.minutes = this.minutesAux.toString().padStart(2, "0");
      this.getElementsLabel[1].innerHTML = this.minutes;

      if (this.minutesAux == 60) {
        this.hourdAux++;
        this.minutesAux = 0;
      }

      this.hourd = this.hourdAux.toString().padStart(2, "0");
      this.getElementsLabel[0].innerHTML = this.hourd;

      this.progress = (this.conT / this.maxMilliseconds) * 100;
      this.progressBar.style.width = this.progress + "%";
      // Verificar si el progreso es mayor o igual a 100
      if (this.progress >= 100) {
        this.clearChoronometer();
        console.log("Cronómetro finalizado");
        return;
      }

      if (this.conT >= this.maxMilliseconds) {
        this.clearChoronometer();
        console.log("Tiempo máximo alcanzado");
        return;
      }

      this.conT++;
    }, this.speed);
  }
  //método detiene el cronómetro y lo reinicia.
  clearChoronometer() {
    //Se limpia el intervalo de actualización del cronómetro.
    clearInterval(this.intervalID);
    //Se reinician los elementos HTML que muestran las horas, minutos y segundos a "00".
    this.getElementsLabel[0].innerHTML = "00";
    this.getElementsLabel[1].innerHTML = "00";
    this.getElementsLabel[2].innerHTML = "00";
  }
  // métodos  que permiten obtener los valores actuales de segundos, minutos y horas del cronómetro.
  getSeconds() {
    return this.seconds;
  }
  getMinutes() {
    return this.minutes;
  }
  getHourd() {
    return this.hourd;
  }
}
