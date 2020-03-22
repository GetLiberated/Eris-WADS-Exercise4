import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  authError: any;

  constructor(private auth: AuthService, private router: Router) { }

  ngOnInit() {
    this.auth.eventAuthError$.subscribe( data => {
      this.authError = data;
    });
    if (this.auth.isLoggedIn()) {
      this.router.navigate(['/home']);
    }
  }

  login(frm) {
    this.auth.login(frm.value.email, frm.value.password);
  }

  createUser(frm) {
    this.auth.createUser(frm.value);
  }

}
