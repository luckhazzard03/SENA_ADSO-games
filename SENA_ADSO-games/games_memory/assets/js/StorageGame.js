//let objUser= '{"'+modelStorage+'":["user":"'+getData+'","points":"0"]}';
// Import the functions you need from the SDKs you need
/*import { initializeApp } from "https://www.gstatic.com/firebasejs/10.9.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.9.0/firebase-auth.js";*/

//let objUser= '{"'+modelStorage+'":["user":"'+getData+'","points":"0"]}';
// Import the functions you need from the SDKs you need
/*import { initializeApp } from "https://www.gstatic.com/firebasejs/10.9.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.9.0/firebase-auth.js";*/

class StorageGame {
  constructor(modelName) {
    this.modelName = modelName;
  }

  getStorage() {
    // Implementa la lógica para obtener los datos de almacenamiento (localStorage, Firebase, etc.)
    return localStorage.getItem(this.modelName);
  }

  setStorage(json) {
    // Implementa la lógica para establecer los datos de almacenamiento (localStorage, Firebase, etc.)
    localStorage.setItem(this.modelName, json);
  }
}

/* Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);*/

/*class StorageGame{

  constructor(model){
    this.modelStorage = model; //This variable contains the name of the local storge model.
  }

  getStorage(){
    return localStorage.getItem(this.modelStorage);
  }
  setStorage(json){
    return localStorage.setItem(this.modelStorage,json);
  }



}  */
