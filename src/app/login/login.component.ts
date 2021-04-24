import { Component, ElementRef, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  userInput = new ElementRef("userInput");
  passInput = new ElementRef("passInput");
  loggedIn = false

  constructor(private authService: AuthService) { 
  }

  ngOnInit(): void {
    this.authService.sessionStatus.subscribe(
      (status: {loggedIn: boolean}) => {
        this.loggedIn = status.loggedIn;
      } 
    )
  }

  onLogin(){
    this.authService.login();
  }

  onLogout(){
    this.authService.logout();
  }

}
