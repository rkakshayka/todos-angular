import { Component } from '@angular/core';
import { LoginComponent } from "./login/login.component";
import { WelcomeComponent } from "./welcome/welcome.component";
import { ErrorComponent } from "./error/error.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [LoginComponent, WelcomeComponent, ErrorComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  /**
   * AppComponent serves as the root component for the Angular application.
   * It includes the main layout and navigation for the Todos application.
   */

  // Title for the application
  appTitle = 'Todos Application';
  // Default message for the welcome component
  message = 'Welcome to'
}
