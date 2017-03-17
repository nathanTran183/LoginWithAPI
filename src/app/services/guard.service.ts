import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable()
export class CanActivateGuard implements CanActivate {
  private connected: boolean = false;

  constructor(private router: Router, private auth: AuthService) { }

  public canActivate() {
    if (this.auth.getUser()) {
      return true;
    }
    // not logged in so redirect to login page
    this.router.navigate(['/login']);
    return false;
  }
}
