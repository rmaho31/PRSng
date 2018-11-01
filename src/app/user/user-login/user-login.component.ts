import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../../services/user.service';
import { SystemService } from '../../services/system.service';
import { User } from '../../classes/user';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {
	message: string = '';
	user: User = new User();

	login() {
		this.userSvc.login(this.user)
			.subscribe(jsr => {
				if(jsr.code == 0) {
					if(this.sysSvc.data.user.rememberMe === true){
						this.cookiesvc.set('userName', jsr.data.userName);
						this.cookiesvc.set('password', jsr.data.password);
					}
					this.cookiesvc.set('Test', 'Hello World');
					console.log(jsr);
					this.user = jsr.data[0];
					this.sysSvc.data.user.instance = this.user;
					this.sysSvc.data.user.loggedIn = true;
					this.router.navigateByUrl('/home');
				}
				else {
					console.log(jsr.data[0]);
					this.message = "Invalid Username/Password combo.  Retry";
				}
			})
	}

	constructor(private cookiesvc: CookieService,
							private userSvc: UserService, 
  						private sysSvc: SystemService,
  						private router: Router) { }

  ngOnInit() {
  }

}
