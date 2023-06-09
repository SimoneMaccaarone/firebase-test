import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/auth/auth.service';
import { FirestoreService } from 'src/app/services/firestore/firestore.service';

@Component({
  selector: 'app-user-page',
  templateUrl: './user-page.component.html',
  styleUrls: ['./user-page.component.scss']
})
export class UserPageComponent {

  dbUser: any;

  constructor(private firestore:FirestoreService,private auth:AuthService){
    this.auth.userSubject.subscribe({
      next: user =>{
        if(user){
          this.firestore.getUser(user.uid).then(dbUser=>{
            this.dbUser= dbUser;
            console.log('dbUser',dbUser)
          }

          )
        }
      }
    })

  }

}
