import { Injectable } from '@angular/core';
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { doc, getDoc } from "firebase/firestore";
import { Manga } from 'src/app/model/manga';

@Injectable({
  providedIn: 'root'
})
export class FirestoreService {

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

  db = getFirestore(this.app);

  constructor() { }

  getManga(id: string): Promise<Manga | null> {
    const docRef = doc(this.db, "manga", id);
    return getDoc(docRef).then(document => {
      if (document.exists()) {
        return document.data() as Manga; 0
      } else {
        return null;
      }
    })
  }


}
