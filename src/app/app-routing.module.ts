import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddCustomersComponent } from './components/add-customers/add-customers.component';
import { CustomerCardComponent } from './components/customer-card/customer-card.component';
import { EditCustomerComponent } from './components/edit-customer/edit-customer.component';
import { EmployeesComponent } from './components/employees/employees.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { RegisterComponent } from './components/register/register.component';
import { ShowCustomersComponent } from './components/show-customers/show-customers.component';
import { SideNavbarComponent } from './components/side-navbar/side-navbar.component';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  {path: "", pathMatch:'full', redirectTo:"login"},
  {path:"login" , component:LoginComponent},
  {path: "register",component: RegisterComponent},
  {path:"navbar" , component:NavbarComponent,canActivate:[AuthGuard] },
  {path: "side-navbar", component:SideNavbarComponent, canActivate:[AuthGuard] },
  {path: "show-customers", component:ShowCustomersComponent, canActivate:[AuthGuard] },
  {path: "edit-customer", component:EditCustomerComponent, canActivate:[AuthGuard] },
  {path: "add-customers", component:AddCustomersComponent, canActivate:[AuthGuard] },
  {path: "customer-card", component:CustomerCardComponent, canActivate:[AuthGuard] },
  {path: "home", component:HomeComponent, canActivate:[AuthGuard] },
  {path: "employees", component: EmployeesComponent, canActivate:[AuthGuard]},

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
