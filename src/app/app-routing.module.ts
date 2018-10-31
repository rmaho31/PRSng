import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserListComponent } from './user/user-list/user-list.component';
import { UserCreateComponent } from './user/user-create/user-create.component';
import { UserDetailComponent } from './user/user-detail/user-detail.component';
import { UserLoginComponent } from './user/user-login/user-login.component';
import { UserEditComponent } from './user/user-edit/user-edit.component';
// import { VendorListComponent } from './Vendor/Vendor-list/Vendor-list.component';
// import { VendorCreateComponent } from './Vendor/Vendor-create/Vendor-create.component';
// import { VendorDetailComponent } from './Vendor/Vendor-detail/Vendor-detail.component';
// import { VendorLoginComponent } from './Vendor/Vendor-login/Vendor-login.component';
// import { VendorEditComponent } from './Vendor/Vendor-edit/Vendor-edit.component';
// import { PurchaseRequestListComponent } from './PurchaseRequest/PurchaseRequest-list/PurchaseRequest-list.component';
// import { PurchaseRequestCreateComponent } from './PurchaseRequest/PurchaseRequest-create/PurchaseRequest-create.component';
// import { PurchaseRequestDetailComponent } from './PurchaseRequest/PurchaseRequest-detail/PurchaseRequest-detail.component';
// import { PurchaseRequestLoginComponent } from './PurchaseRequest/PurchaseRequest-login/PurchaseRequest-login.component';
// import { PurchaseRequestEditComponent } from './PurchaseRequest/PurchaseRequest-edit/PurchaseRequest-edit.component';
// import { LineItemListComponent } from './LineItem/LineItem-list/LineItem-list.component';
// import { LineItemCreateComponent } from './LineItem/LineItem-create/LineItem-create.component';
// import { LineItemDetailComponent } from './LineItem/LineItem-detail/LineItem-detail.component';
// import { LineItemLoginComponent } from './LineItem/LineItem-login/LineItem-login.component';
// import { LineItemEditComponent } from './LineItem/LineItem-edit/LineItem-edit.component';


import { HomeComponent } from './home/home/home.component';
import { AboutComponent } from './about/about/about.component';

const routes: Routes = [
  {path:'', redirectTo: '/home', pathMatch: 'full'},
  {path:'users/list', component: UserListComponent},
  {path:'users/create', component: UserCreateComponent},
  {path:'users/detail/:id', component: UserDetailComponent},
  {path:'users/edit/:id', component: UserEditComponent},
  {path:'users/login', component: UserLoginComponent},
  {path:'home', component: HomeComponent},
  {path:'about', component: AboutComponent},
  {path:'vendors/list', component: UserListComponent},
  {path:'vendors/create', component: UserCreateComponent},
  {path:'vendors/detail/:id', component: UserDetailComponent},
  {path:'vendors/edit/:id', component: UserEditComponent},
  {path:'vendors/login', component: UserLoginComponent},
  {path:'products/list', component: UserListComponent},
  {path:'products/create', component: UserCreateComponent},
  {path:'products/detail/:id', component: UserDetailComponent},
  {path:'products/edit/:id', component: UserEditComponent},
  {path:'products/login', component: UserLoginComponent},
  {path:'purchaserequests/list', component: UserListComponent},
  {path:'purchaserequests/create', component: UserCreateComponent},
  {path:'purchaserequests/detail/:id', component: UserDetailComponent},
  {path:'purchaserequests/edit/:id', component: UserEditComponent},
  {path:'purchaserequests/login', component: UserLoginComponent},
  {path:'lineitems/list', component: UserListComponent},
  {path:'lineitems/create', component: UserCreateComponent},
  {path:'lineitems/detail/:id', component: UserDetailComponent},
  {path:'lineitems/edit/:id', component: UserEditComponent},
  {path:'lineitems/login', component: UserLoginComponent},
  {path:'**', component: UserListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
