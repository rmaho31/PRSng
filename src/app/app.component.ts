import { Component, OnInit } from '@angular/core';
import { UserService } from './services/user.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'PRSng';

  ngOnInit(): void {
    this.usersvc.list()
    .subscribe(res => {
      console.log(res)
    });
  }

  constructor(private usersvc: UserService) {}
}
