import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { User } from '../../classes/user';
//import { SortPipe } from '@pipe/sort.pipe';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  users: User[];
  title: string = "User List";
  sortBy: string = "Id";

  constructor(private userSvc: UserService) { }

  ngOnInit() {
    this.userSvc.list().subscribe(res => {
                                  this.users = res.data;
      }
    );
  }

  setSortBy(column: string): void {
    this.sortBy = column;
  }
}
