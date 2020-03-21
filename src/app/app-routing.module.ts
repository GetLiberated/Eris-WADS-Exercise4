import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { RegistrationComponent } from './auth/registration/registration.component';
import { HomeComponent } from './home/home.component';
import { AuthguardGuard } from './authguard.guard';  

const routes: Routes = [
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    component: LoginComponent  
  },
  // {
  //   path: 'register',
  //   component: RegistrationComponent
  // },
  {
    path: 'home',
    component: HomeComponent,
    canActivate:[AuthguardGuard]
  },
  { 
    path: 'admin', 
    loadChildren: () => import('./admin-layout/admin-layout.module').then(m => m.AdminLayoutModule),
    canActivate:[AuthguardGuard]
  }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
