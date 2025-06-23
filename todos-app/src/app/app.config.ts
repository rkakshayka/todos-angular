import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';

import { routes } from './app.routes';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

export const appConfig: ApplicationConfig = {
  providers: [
    importProvidersFrom(BrowserModule, FormsModule),
    provideRouter(routes),
    provideHttpClient(withInterceptorsFromDi()) // 👈 Add this line
  ]
};
// Note: The `provideHttpClient(withInterceptorsFromDi())` is used to provide the HTTP client with interceptors from the dependency injection system.
// This allows the application to make HTTP requests and handle responses, including any interceptors that may be defined in the application.