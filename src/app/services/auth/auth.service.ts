import { Injectable } from '@angular/core';
import { FirebaseService } from '../firebase/firebase.service';
import { getAuth, Auth, signInWithPopup, onAuthStateChanged } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";
import { Subject } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class AuthService {

  auth: Auth

  provider = new GoogleAuthProvider();

  userSubject: Subject<any> = new Subject();

  constructor(private firebase: FirebaseService) {
    this.auth = getAuth(this.firebase.app);
    this.provider = new GoogleAuthProvider();


    onAuthStateChanged(this.auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        console.log('auth state',user)
        this.userSubject.next(user);
        // const uid = user.uid;

      } else {
        // User is signed out
        this.userSubject.next(null)
        console.log('nessuno è loggato')
      }
    });




  }


  signIn(){
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
    // ...
  });
  }





}
