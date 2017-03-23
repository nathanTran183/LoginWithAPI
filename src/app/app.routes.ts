import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CanActivateGuard } from './services/guard.service';

// Components
import { HomeComponent } from './pages/home/home.component';
import { PageNumComponent } from './pages/page-num/page-num.component';
import { LayoutsAuthComponent } from './pages/layouts/auth/auth';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { ProfileComponent } from './pages/profile/profile.component';

const routes: Routes = [
  // logged routes
  {
    canActivate: [CanActivateGuard],
    children: [
      { 
        canActivate: [CanActivateGuard],
        path: '', 
        redirectTo: 'home', 
        pathMatch: 'full' 
      },
      {
        canActivate: [CanActivateGuard],
        component: HomeComponent,
        path: 'home',        
      },
      {
        canActivate: [CanActivateGuard],
        component: ProfileComponent,
        path: 'profile',
      },
      {
        canActivate: [CanActivateGuard],
        component: PageNumComponent,
        path: 'page/:id'
      },
    ],
    path: '',
    component: LayoutsAuthComponent,
  },
  { 
    canActivate: [CanActivateGuard],
    path: '',
    redirectTo: 'home', 
    pathMatch: 'full'
  },
  // not logged routes
  {
    component: LoginComponent,
    path: 'login'
  },
  {
    component: RegisterComponent,
    path: 'register'
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);
