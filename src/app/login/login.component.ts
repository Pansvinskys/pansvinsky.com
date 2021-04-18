import { Component, ElementRef, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  userInput = new ElementRef("userInput");
  passInput = new ElementRef("passInput");

  constructor() { }

  ngOnInit(): void {

  }

  onLogin(){
    
  }

}
