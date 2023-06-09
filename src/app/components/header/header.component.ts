import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  user: any

  constructor(private auth: AuthService) {}

  ngOnInit(): void {
    this.auth.userSubject.subscribe({
      next: user=> this.auth =user,
      error: err=> console.log(err)
    });
  }


  logIn(){
    console.log('pluto lo stronzo',this.auth )
    this.auth.signIn();
  }

  logOut(){
    this.auth.signOut();
  }


}
