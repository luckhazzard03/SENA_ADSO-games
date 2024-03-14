// Se declara la variable global para almacenar la instancia de la clase Game
var objClass;
// Se define las constantes para los IDs de los elementos HTML relevantes
const contId = "containerGame"; // ID del contenedor del juego
const progress = "progressbarId"; // ID de la barra de progreso
const choronometer = "choronometerId"; // ID del cronómetro
// Se define los valores constantes para la velocidad y el tiempo máximo del cronómetro
const speed = 100; // Velocidad en milisegundos
const maxMilliseconds = 2000; // Tiempo máximo en milisegundos

// Función para establecer el nivel del juego
function setLevel(value) {
  // Se crea una nueva instancia de la clase Game y la almacenamos en objClass
  objClass = new Game(
    contId, // ID del contenedor del juego
    value, // Nivel del juego
    progress, // ID de la barra de progreso
    choronometer, // ID del cronómetro
    speed, // Velocidad del cronómetro
    maxMilliseconds // Tiempo máximo del cronómetro
  );
}
