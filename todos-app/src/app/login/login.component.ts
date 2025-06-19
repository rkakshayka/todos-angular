import { NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, NgIf],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit {

  username  = 'akshay'
  password = ''
  inValidLogin = false
  errorMessage = 'Invalid Credentials'

  constructor(private routes : Router) { }
  
  handleLogin() {
    console.log(this.username);
    //console.log(this.password);
    if(this.username === 'akshay' && this.password === 'dummy') {
      // redirect to welcome page - so will be needing an instance of routes
      this.routes.navigate(['welcome', this.username])
      this.inValidLogin = false;
    }
    else {
      this.inValidLogin = true;
    }
  }

  ngOnInit() {

  }

}
