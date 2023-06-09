import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  user: any

  constructor(private auth: AuthService) {
    this.auth.userSubject.subscribe(user => this.user = user);

  }


  logIn(){
    this.auth.signIn()
  }

}
