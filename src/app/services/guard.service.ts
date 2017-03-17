import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable()
export class CanActivateGuard implements CanActivate {
  private connected: boolean = false;

  constructor(
    private router: Router,
    private auth: AuthService
  ) {
    this.auth.getUser().subscribe((user) => {
      this.connected = user.connected;
    });
  }

  public canActivate() {
    // test here if you user is logged
    if ( !this.connected ) {
      this.router.navigate( [ 'login' ] );
    }
    return this.connected;
  }
}
