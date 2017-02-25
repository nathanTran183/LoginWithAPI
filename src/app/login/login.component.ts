import { Component, OnInit } from '@angular/core';
import { AuthService } from '../service/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  message: string;
  loading: boolean;
  constructor(private auth: AuthService, private router: Router) {
    this.message = '';
   }

  ngOnInit() {
  }

  login(username: string, password: string): void {
    this.loading = true;
    this.message = '';
    this.auth.login(username, password)
      .subscribe(result => {
        console.log("Result" + result); //cho ni ne
        if (result === true) {
          this.router.navigate(['/']);
        } else {
          console.log("Nothing");// han ko chay cho ni lun ne
          this.message = 'Username or password is incorrect';
          this.loading = false;
        }
      },
      error => {
         console.log("Nothing");// han ko chay cho ni lun ne
          this.message = 'Username or password is incorrect';
          this.loading = false;
      });
  }
}
