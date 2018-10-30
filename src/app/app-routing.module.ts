import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserListComponent } from './user/user-list/user-list.component';
import { UserCreateComponent } from './user/user-create/user-create.component';
import { UserDetailComponent } from './user/user-detail/user-detail.component';
import { UserLoginComponent } from './user/user-login/user-login.component';
import { UserEditComponent } from './user/user-edit/user-edit.component';

const routes: Routes = [
  {path:'', redirectTo: '/Users/List', pathMatch: 'full'},
  {path:'Users/List', component: UserListComponent},
  {path:'Users/Create', component: UserCreateComponent},
  {path:'Users/Detail', component: UserDetailComponent},
  {path:'Users/Login', component: UserLoginComponent},
  {path:'Users/Edit', component: UserEditComponent},
  {path:'**', component: UserListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
