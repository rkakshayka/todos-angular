import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HardcodedAuthenticationService {

  constructor() { }
  authenticate(username: string, password: string) {
    //console.log('Before ' + this.isUserLoggedIn());
    if (username == 'akshay' && password === 'dummy') {
      sessionStorage.setItem('authenticatedUser', username);
      //console.log('After ' + this.isUserLoggedIn());
      return true;
    }
    return false;
  }

  /*
    isUserLoggedIn() {
      let user = sessionStorage.getItem('authenticatedUser')
      return !(user === null)
    }
  */
  /*
  Your isUserLoggedIn() function will throw an error if it runs outside the browser
   (for example, during server-side rendering or in some test environments), 
   because sessionStorage is not defined there.
   
  To fix this, check if window and sessionStorage are available before accessing them:
  */
  isUserLoggedIn() {
    if (typeof window !== 'undefined' && window.sessionStorage) {
      let user = sessionStorage.getItem('authenticatedUser');
      return user !== null;
    }
    return false;
  }

  logout() {
    sessionStorage.removeItem('authenticatedUser')
  }

}
// Note: The `authenticate` method checks if the username and password match the hardcoded values.
// If they do, it stores the username in sessionStorage and returns true.