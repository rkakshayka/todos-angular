import { inject } from '@angular/core';
import { CanActivateFn, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { HardcodedAuthenticationService } from './hardcoded-authentication.service';

export const routeGuard: CanActivateFn = (
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot
) => {
  const authService = inject(HardcodedAuthenticationService);
  const router = inject(Router);

  // Example usage of route and state
  console.log('Attempting to access route:', route.routeConfig?.path);
  console.log('Target URL:', state.url);

  if (authService.isUserLoggedIn()) {
    return true;
  } else {
    router.navigate(['login']);
    return false;
  }
};

/*
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, GuardResult, MaybeAsync, Router, RouterStateSnapshot } from '@angular/router';
import { HardcodedAuthenticationService } from './hardcoded-authentication.service';

@Injectable({
  providedIn: 'root'
})
export class RouteGuardService implements CanActivate {

  constructor(
    private hardcodedAuthenticationService: HardcodedAuthenticationService,
    private router: Router
  ) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    console.log('RouteGuardService: canActivate called for route:', state.url);

    const isLoggedIn = this.hardcodedAuthenticationService.isUserLoggedIn();

    console.log('RouteGuardService: isUserLoggedIn returned:', isLoggedIn);

    if (isLoggedIn) {
      console.log('RouteGuardService: Access granted.');
      return true;
    }
    this.router.navigate(['login']);

    console.log('RouteGuardService: Access denied.');
    return false;
  }
*/
/*
canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
 if (this.hardcodedAuthenticationService.isUserLoggedIn())
   return true;

 this.router.navigate(['login']);
 return false;
}
 
}
*/
