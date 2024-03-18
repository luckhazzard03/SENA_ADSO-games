// Define the Choronometer class, which is used to create a stopwatch on the web page.
class Choronometer {
  // Constructor method that receives three parameters (choronometerId, speed, maxMilliseconds)
  constructor(choronometerId, speed, maxMilliseconds) {
    // Initialize and search for the HTML element in the document with the provided ID and store it in this.objChoronometer.
    this.objChoronometer = document.getElementById(choronometerId); //choronometerId
    // Initialize the label elements within the this.objChoronometer element and store them in this.getElementsLabel.
    this.getElementsLabel = this.objChoronometer.querySelectorAll("label");
    // Initialize variables for the stopwatch
    this.conT = 0;
    this.seconds = "00";
    this.minutes = "00";
    this.hourd = "00";
    this.secondsAux = 0;
    this.minutesAux = 0;
    this.hourdAux = 0;
    /* Assign speed and maximum time values, and initialize an intervalID variable to 
	store the ID of the interval that controls the stopwatch update. */
    this.speed = speed;
    this.maxMilliseconds = maxMilliseconds;
    this.intervalID;
    this.progress = 0; // Initialize progress to 0
    this.progressBar = document.getElementById("progressBar"); // Get the progress bar
  }
  // Method starts the stopwatch.
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
      // Check if progress is greater than or equal to 100
      if (this.progress >= 100) {
        this.clearChoronometer();
        console.log("Stopwatch finished");
        return;
      }

      if (this.conT >= this.maxMilliseconds) {
        this.clearChoronometer();
        console.log("Maximum time reached");
        return;
      }

      this.conT++;
    }, this.speed);
  }
  // Method stops the stopwatch and resets it.
  clearChoronometer() {
    // Clear the interval for updating the stopwatch.
    clearInterval(this.intervalID);
    // Reset the HTML elements showing hours, minutes, and seconds to "00".
    this.getElementsLabel[0].innerHTML = "00";
    this.getElementsLabel[1].innerHTML = "00";
    this.getElementsLabel[2].innerHTML = "00";
  }
  // Methods to get the current values of seconds, minutes, and hours from the stopwatch.
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
