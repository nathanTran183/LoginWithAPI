import { Component, OnInit } from '@angular/core';
import {AuthService} from '../service/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private auth: AuthService, private router: Router) { }

  ngOnInit() {
    console.log(localStorage.getItem('user'));
  }

  logOut() {
    this.auth.logout();
    this.router.navigate(['/login']);
    return false;
  }

}
