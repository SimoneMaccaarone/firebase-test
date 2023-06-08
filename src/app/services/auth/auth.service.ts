import { Injectable } from '@angular/core';
import { FirebaseService } from '../firebase/firebase.service';
import { getAuth, Auth, signInWithPopup } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";



@Injectable({
  providedIn: 'root'
})
export class AuthService {

  auth: Auth

  provider = new GoogleAuthProvider();

  constructor(private firebase: FirebaseService) {
    this.auth = getAuth(this.firebase.app);
    this.provider = new GoogleAuthProvider();
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
