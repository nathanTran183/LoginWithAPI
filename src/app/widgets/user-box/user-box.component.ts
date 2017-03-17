import { Component, OnInit } from '@angular/core';
import {Account} from '../../models/account';
import {AuthService} from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  /* tslint:disable */
  selector: '.userBox',
  /* tslint:enable */
  styleUrls: ['./user-box.component.css'],
  templateUrl: './user-box.component.html'
})
export class UserBoxComponent implements OnInit {
  private currentUser: Account = new Account();

  constructor(private userServ: AuthService, private router: Router) {
    // se connecter au modif du user courant
       this.currentUser = this.userServ.getUser();
  }

  public ngOnInit() {
    // TODO
  }

  private logout = (): void => {
    this.userServ.logout();
  }
}
