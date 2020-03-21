import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthguardService } from './authguard.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthguardGuard implements CanActivate {

  constructor(private Authguardservice: AuthguardService, private router: Router) { }

  canActivate(): boolean {
    if (!this.Authguardservice.getToken()) {
      this.router.navigateByUrl("/login");
      return false;
    }
    return true; 
  }
  
}
