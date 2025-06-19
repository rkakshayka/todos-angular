import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-error',
  standalone: true,
  imports: [],
  templateUrl: './error.component.html',
  styleUrl: './error.component.css'
})
export class ErrorComponent implements OnInit {

  errorMessage = 'Something went wrong. Please contact support team'

  constructor() { }

  ngOnInit() {
    
  }
}
