import { Routes } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { LoginComponent } from './login/login.component';
import { ErrorComponent } from './error/error.component';

export const routes: Routes = [

    // this will redirect to the login page if no other route is matched
    // this should be the first route in the array
    { path: '', component: LoginComponent },

    
    { path: 'login', component: LoginComponent },
    { path: 'welcome/:name', component: WelcomeComponent },


    // wildcard route for a 404 page - always should be the last route in the array
    { path: '**', component: ErrorComponent },
];

// Note: The order of the routes is important. The first route that matches the URL will be used.
// The wildcard route should always be the last route in the array to catch all unmatched routes.

// The `:name` in the route is a route parameter. It can be accessed in the component using ActivatedRoute.
   // For example, in the WelcomeComponent, you can access it using `this.route.snapshot.params['name']`.
// The `**` in the wildcard route means that it will match any URL that is not matched by the previous routes.
// The `path: ''` route will match the root URL and redirect to the login page.
// The `path: 'login'` route will match the `/login` URL and display the LoginComponent.
// The `path: 'welcome/:name'` route will match the `/welcome/:name` URL and display the WelcomeComponent.
// The `path: '**'` route will match any URL that is not matched by the previous routes and display the ErrorComponent. 

