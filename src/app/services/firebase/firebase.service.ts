import { Injectable } from '@angular/core';
import { initializeApp } from "firebase/app";


@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  // Your web app's Firebase configuration
  firebaseConfig = {
    apiKey: "AIzaSyAIx1Svy_svKsqzfx_ms1XhGtx2nSfHwb0",
    authDomain: "my-first-project-bad19.firebaseapp.com",
    projectId: "my-first-project-bad19",
    storageBucket: "my-first-project-bad19.appspot.com",
    messagingSenderId: "314231743415",
    appId: "1:314231743415:web:750035266a1a4ade94be32"
  };
  // Initialize Firebase
  app = initializeApp(this.firebaseConfig);

  constructor() { }
}
