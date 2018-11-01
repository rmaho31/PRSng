import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { SystemService } from './services/system.service';
import { Router } from '@angular/router';
import { UserService } from './services/user.service';
import { User } from './classes/user';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'PRSng';
  user: User = new User()

  ngOnInit(): void {
    if (this.syssvc.data.user.loggedIn === false) {
      this.user.userName = this.cookiesvc.get('userName');
      this.user.password = this.cookiesvc.get('password');
      this.usersvc.login(this.user)
        .subscribe(jsr => {
          if (jsr.code == 0) {
            this.syssvc.data.user.loggedIn = true;
            this.syssvc.data.user.instance = jsr.data[0];
            this.router.navigateByUrl('/home')
          } else {
            this.router.navigateByUrl('/users/login');
          }
        });
      }
  }

  constructor(private cookiesvc: CookieService,
    private syssvc: SystemService,
    private router: Router,
    private usersvc: UserService) { }
}