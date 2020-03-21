import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthguardService {

  constructor() { }

  public getToken(): string {  
    return localStorage.getItem("SessionUser");  
  }
}
