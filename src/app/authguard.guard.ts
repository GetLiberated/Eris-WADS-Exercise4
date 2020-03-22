import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth/auth.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthguardGuard implements CanActivate {

  constructor(private Authservice: AuthService, private router: Router) { }

  canActivate(): boolean {
    if (!this.Authservice.isLoggedIn()) {
      this.router.navigateByUrl("/login");
      return false;
    }
    return true; 
  }
  
}
