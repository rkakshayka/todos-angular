import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent implements OnInit {

  currentYear = 2025;
  
  constructor() { }
  ngOnInit() {
    
  }

}
// Note: The `currentYear` is hardcoded to 2025. You can use `new Date().getFullYear()` to get the current year dynamically.
// The `ngOnInit` lifecycle hook is used to perform any initialization logic when the component is created.