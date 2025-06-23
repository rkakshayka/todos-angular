import { NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { HelloWorldBean, WelcomeDataService } from '../service/data/welcome-data.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css'],
  standalone: true,
  imports: [RouterLink, NgIf] // Added
})

export class WelcomeComponent implements OnInit {

  message = 'Some Welcome Message'
  welcomeMesageFromService: string = ''
  name = ''

  //ActivatedRouter is a service provided by angular router 
  //basically it asks for argument
  constructor(
    private route: ActivatedRoute,
    private service: WelcomeDataService
  ) { }

  ngOnInit() {
    console.log(this.message);
    //console.log(this.route.snapshot.params['name']); 
    this.name = this.route.snapshot.params['name'];
  }

  getWelcomeMessage() {
    console.log(this.service.executeHelloWorldBeanService());
    // This method is called when the user clicks the button to get a welcome message.
    // It calls the service method to fetch the welcome message and subscribes to the response.
    // On success, it calls handleSuccessfulResponse to process the response.
    // On error, it logs the error to the console.  

    this.service.executeHelloWorldBeanService().subscribe(
      response => this.handleSuccessfulResponse(response),
      error => this.handleErrorResponse(error)
    );
    console.log("last line of getWelcomeMessage method");
  }


  getWelcomeMessagerWithName() {
    console.log(this.service.executeHelloWorldBeanServiceWithPathVariable(this.name));
    // This method is called when the user clicks the button to get a welcome message with a name.
    // It calls the service method with the name parameter and subscribes to the response.
    // On success, it calls handleSuccessfulResponse to process the response.
    // On error, it logs the error to the console.  
    this.service.executeHelloWorldBeanServiceWithPathVariable(this.name).subscribe(
      response => this.handleSuccessfulResponse(response),
      error => this.handleErrorResponse(error)    
    )
  }

  handleSuccessfulResponse(response: HelloWorldBean) {
    this.welcomeMesageFromService = response.message;
    console.log(response);
    console.log(response.message);
    //this.message = response.message;
  }

  handleErrorResponse(error: any) {
    console.log(error);
    console.log(error.error);
    console.log(error.error.message);
    this.welcomeMesageFromService = error.error.message; // Assuming the error response has a message property
    
    // Handle the error response here, e.g., show an error message to the user
  } 

}