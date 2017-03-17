import { Component, OnInit, Input } from '@angular/core';
import { Account } from '../../models/account';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-menu-aside',
  styleUrls: ['./menu-aside.component.css'],
  templateUrl: './menu-aside.component.html'
})
export class MenuAsideComponent implements OnInit {
  private currentUrl: string;
  private currentUser: Account = new Account();

  @Input() private links: Array<any> = [];

  constructor(private userServ: AuthService, public router: Router) {
    // getting the current url
    this.router.events.subscribe((evt) => this.currentUrl = evt.url);
    this.currentUser = this.userServ.getUser();
  }

  public ngOnInit() {
    // TODO
  }

}
