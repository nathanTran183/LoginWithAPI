import { Component, OnInit, OnDestroy } from '@angular/core';
import { BreadcrumbService } from '../../services/breadcrumb.service';
import { MessagesService } from '../../services/messages.service';
import { AuthService } from '../../services/auth.service';
import { Account } from '../../models/account';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit, OnDestroy {
  public user: Account;
  constructor(
    private breadServ: BreadcrumbService, 
    private msgServ: MessagesService,
    private authServ: AuthService,
    ) { }

  ngOnInit() {
    this.breadServ.set({
      description: 'User Profile',
      display: true,
      header: 'Basic User Information',
      levels: [
        {
          icon: 'dashboard',
          link: ['/'],
          title: 'Home'
        },
        {
          icon: 'user',
          link: ['/profile'],
          title: 'User profile'
        }
      ]
    });
    console.log(JSON.parse(this.authServ.getUser()).user);
    this.user = new Account(JSON.parse(this.authServ.getUser()).user);
    this.user.connected = true;
    console.log(this.user);
  }

  ngOnDestroy() {
    // removing the header
    this.breadServ.clear();
  }

}
