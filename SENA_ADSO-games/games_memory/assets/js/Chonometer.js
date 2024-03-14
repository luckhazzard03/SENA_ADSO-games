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
  }
  //método comienza el cronómetro.
  startChoronometer() {
    //setInterval para llamar a una función que actualiza el cronómetro cada cierto intervalo de tiempo definido por speed.
    this.intervalID = setInterval(() => {
      // formatea los segundos para que siempre tengan dos dígitos, añadiendo un cero delante si es necesario.
      this.seconds =
        this.secondsAux.toString().length == 1
          ? "0" + this.secondsAux.toString()
          : this.secondsAux;
      // actualiza el elemento HTML que muestra los segundos.
      this.getElementsLabel[2].innerHTML = this.seconds;
      //incrementa el contador de segundos auxiliar.
      this.secondsAux++;
      //formatea los minutos para que siempre tengan dos dígitos, añadiendo un cero delante si es necesario.
      this.minutes =
        this.minutesAux.toString().length == 1
          ? "0" + this.minutesAux.toString()
          : this.minutesAux;
      // actualiza el elemento HTML que muestra los minutos.
      this.getElementsLabel[1].innerHTML = this.minutes;
      //formatea las horas para que siempre tengan dos dígitos, añadiendo un cero delante si es necesario.
      this.hourd =
        this.hourdAux.toString().length == 1
          ? "0" + this.hourdAux.toString()
          : this.hourdAux;
      //actualiza el elemento HTML que muestra las horas.
      this.getElementsLabel[0].innerHTML = this.hourd;
      //Si los segundos alcanzan 60, se reinician a 0 y se incrementan los minutos.
      if (this.secondsAux == 60) {
        this.minutesAux++;
        this.secondsAux = 0;
      }
      //Si los minutos alcanzan 60, se reinician a 0 y se incrementan las horas.
      if (this.minutesAux == 60) {
        this.hourdAux++;
        this.minutesAux = 0;
      }
      //Si el contador alcanza el tiempo máximo definido, se reinicia el cronómetro.
      if (this.conT == this.maxMilliseconds) {
        this.conT = 0;
        this.clearChoronometer();
      }
      //Se incrementa el contador de tiempo y se configura el intervalo de actualización.
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
