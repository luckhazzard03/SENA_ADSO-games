// Declares the global variable to store the instance of the Game class
var objClass;

// Defines constants for the IDs of relevant HTML elements
const contId = "containerGame"; // ID of the game container
const progress = "progressbarId"; // ID of the progress bar
const choronometer = "choronometerId"; // ID of the chronometer

// Defines constant values for the speed and maximum time of the chronometer
const speed = 100; // Speed in milliseconds
const maxMilliseconds = 2000; // Maximum time in milliseconds

// Function to set the game level
function setLevel(value) {
  // Creates a new instance of the Game class and stores it in objClass
  objClass = new Game(
    contId, // ID of the game container
    value, // Game level
    progress, // ID of the progress bar
    choronometer, // ID of the chronometer
    speed, // Chronometer speed
    maxMilliseconds // Maximum time for the chronometer
  );
}
