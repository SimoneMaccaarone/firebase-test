import { Component } from '@angular/core';
import { Firestore, doc } from 'firebase/firestore';
import { FirestoreService } from './services/firestore/firestore.service';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'firebase-test';

  constructor(private firestore: FirestoreService) {
    this.firestore.getManga('eMLQmHjUbBBFOjLBcDYJ').then(document => {
      if (document.exists()) {
        console.log(document.data())
      }
    })
  }


}
