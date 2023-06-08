import { Component } from '@angular/core';
import { FirestoreService } from './services/firestore/firestore.service';
import { Manga } from './model/manga';
import { AuthService } from './services/auth/auth.service';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'firebase-test';

  mangas: Manga[] = []

  constructor(private firestore: FirestoreService,public auth:AuthService) {

    this.firestore.getManga('eMLQmHjUbBBFOjLBcDYJ').then(manga => console.log(manga))

    this.firestore.getMangas().then(mangasFromDb => {
      // for (let i = 0; i < mangas.length; i++) {
      //   const element = mangas[i];
      //   console.log('collection', element);
      // }
      this.mangas = mangasFromDb;
    });
  }


}
