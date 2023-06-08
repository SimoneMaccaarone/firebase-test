import { Component } from '@angular/core';
import { Firestore, doc } from 'firebase/firestore';
import { FirestoreService } from './services/firestore/firestore.service';
import { Manga } from './model/manga';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'firebase-test';

  constructor(private firestore: FirestoreService) {

    this.firestore.getManga('eMLQmHjUbBBFOjLBcDYJ').then(manga => console.log(manga))

    this.firestore.getMangas().then(mangas => {
      for (let i = 0; i < mangas.length; i++) {
        const element = mangas[i];
        console.log('collection',element);
      }

    })

  }


}
