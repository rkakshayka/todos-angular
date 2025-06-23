import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

// This service is used to interact with the backend API to fetch welcome messages.
export class HelloWorldBean {
  constructor(public message: string) { }
}

@Injectable({
  providedIn: 'root'
})
export class WelcomeDataService {

  constructor(private http: HttpClient) { }

  executeHelloWorldBeanService() {
    // This method makes an HTTP GET request to the backend API to fetch a welcome message.
    // The URL 'http://localhost:9090/hello-world-bean' is the endpoint that returns a HelloWorldBean object.
    // The method returns an Observable of type HelloWorldBean, which can be subscribed to in components. 
    return this.http.get<HelloWorldBean>('http://localhost:9090/hello-world-bean');
    //console.log('Execute Hello World Bean Service');
  }

  executeHelloWorldBeanServiceWithPathVariable(name: string) {
    // use backtick `` to create a template literal for the URL
    return this.http.get<HelloWorldBean>(`http://localhost:9090/hello-world/path-variable/${name}`);
    //console.log('Execute Hello World Bean Service');
  }
}
