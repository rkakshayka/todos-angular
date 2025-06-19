import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LogoutComponent } from "./logout/logout.component";
import { FooterComponent } from "./footer/footer.component";
import { MenuComponent } from "./menu/menu.component";
import { ListToDosComponent } from "./list-to-dos/list-to-dos.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, LogoutComponent, FooterComponent, MenuComponent, ListToDosComponent],
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
