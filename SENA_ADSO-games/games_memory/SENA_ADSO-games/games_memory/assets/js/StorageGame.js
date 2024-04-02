//let objUser= '{"'+modelStorage+'":["user":"'+getData+'","points":"0"]}';
// Import the functions you need from the SDKs you need
/*import { initializeApp } from "https://www.gstatic.com/firebasejs/10.9.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.9.0/firebase-auth.js";*/

class StorageGame {
  constructor(model) {
    this.modelStorage = model; //This variable contains the name of the local storage model.
    this.database = firebase.database();
  }

  async getStorage() {
    try {
      const snapshot = await this.database.ref(this.modelStorage).once("value");
      return snapshot.val();
    } catch (error) {
      console.error("Error getting data from Firebase:", error);
      return null;
    }
  }

  async setStorage(json) {
    try {
      await this.database.ref(this.modelStorage).set(json);
      return true;
    } catch (error) {
      console.error("Error setting data to Firebase:", error);
      return false;
    }
  }
}

export default StorageGame;
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
