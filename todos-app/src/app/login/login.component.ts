import { NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { HardcodedAuthenticationService } from '../service/hardcoded-authentication.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, NgIf],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})

export class LoginComponent implements OnInit {

  username = 'akshay'
  password = ''
  errorMessage = 'Invalid Credentials'
  invalidLogin = false

  // Router - is a dependency of the LoginComponent
  // Angular.giveMeRouter() will be done by dependency injection
  // to get that dependency we have declare it as construor argument.
  constructor(
    private hardcodedAuthenticationService : HardcodedAuthenticationService,
    private router : Router
  ) { }        

  ngOnInit() {
    
  }

  handleLogin() {
    //if(this.username === 'akshay' && this.password === 'dummy') {
    if(this.hardcodedAuthenticationService.authenticate(this.username, this.password)) { 
      // redirect to welcome page -so will be needing an instance of routes
      this.router.navigate(['welcome', this.username])
      this.invalidLogin =false

    } else {
      this.invalidLogin = true
    } 
  }

}
// Note: The `handleLogin` method checks the credentials using the `HardcodedAuthenticationService`.
// If the credentials are valid, it navigates to the welcome page with the username as a route parameter.