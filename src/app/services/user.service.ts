import { User } from '../models/user';
import { Injectable } from '@angular/core';
import { Observable, ReplaySubject } from 'rxjs/Rx';
import { Router } from '@angular/router';

@Injectable()
export class UserService {

    constructor(
      private router: Router
    ) {
      // TODO
    }

    public logout() {
      let user = new User();
      user.connected = false;
      this.router.navigate(['login']);
    }
}
