import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanActivateChild, CanDeactivate, CanLoad, Route, RouterStateSnapshot, UrlSegment, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class ValidarTokenGuard implements CanActivate, CanActivateChild, CanDeactivate<unknown>, CanLoad {
  
  constructor( private authService: AuthService,
               private router: Router ){

  }

  canActivate(): Observable<boolean > | Promise<boolean > | boolean {
    return this.authService.validarToken()
      .pipe(
        
        tap( valid => {
          if(!valid){
            this.router.navigateByUrl('/auth')
          }
        })
      )
  }
  
  canLoad(): Observable<boolean > | Promise<boolean > | boolean {
    return this.authService.validarToken()
      .pipe(
        tap( valid => {
          if(!valid){
            this.router.navigateByUrl('/auth')
          }
        })
      )
  }












  canActivateChild(
    childRoute: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return true;
  }
  canDeactivate(
    component: unknown,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState?: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return true;
  }




}
