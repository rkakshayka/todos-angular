import { NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { WelcomeDataService } from '../service/data/welcome-data.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css'],
  standalone: true,
  imports: [RouterLink] // Added
})

export class WelcomeComponent implements OnInit {

  message = 'Some Welcome Message'
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

  getWelcomeMessager() {
    //console.log("Get Welcome Message Clicked");
    console.log(this.service.executeHelloWorldBeanService());
    this.service.executeHelloWorldBeanService().subscribe();
  }

}