import { Injectable } from '@angular/core';
import { FirebaseService } from '../firebase/firebase.service';
import { getAuth, Auth, signInWithPopup, onAuthStateChanged, signOut } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";
import { Subject } from 'rxjs';
import { FirestoreService } from '../firestore/firestore.service';



@Injectable({
  providedIn: 'root'
})
export class AuthService {


  auth: Auth

  provider = new GoogleAuthProvider();

  userSubject: Subject<any> = new Subject();


  constructor(private firebase: FirebaseService, private firestore:FirestoreService) {
    this.auth = getAuth(this.firebase.app);
    this.provider = new GoogleAuthProvider();


    onAuthStateChanged(this.auth, async (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        const dbUser = await firestore.getUser(user.uid);

        if(!dbUser){
          await firestore.saveUser(user)
        }
        this.userSubject.next(user);
        console.log('auth state', user);
      } else {
        // User is signed out
        this.userSubject.next(null);
        console.log('nessuno è loggato');
      }
    });




  }


  signIn() {
    console.log('PIPOOOO',this.auth)
    signInWithPopup(this.auth, this.provider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential!.accessToken;
        // The signed-in user info.
        const user = result.user;
        // IdP data available using getAdditionalUserInfo(result)
        // ...
        console.log(user)
      }).catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.customData.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
      });
  }

  signOut() {
    signOut(this.auth).then(result => console.log(result))
  }





}
