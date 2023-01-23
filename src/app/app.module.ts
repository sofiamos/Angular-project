import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideAuth,getAuth } from '@angular/fire/auth';
import { provideFirestore,getFirestore } from '@angular/fire/firestore';
import { LoginComponent } from './components/login/login.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { RegisterComponent } from './components/register/register.component';
import { AddCustomersComponent } from './components/add-customers/add-customers.component';
import { EditCustomerComponent } from './components/edit-customer/edit-customer.component';
import { PipesComponent } from './components/pipes/pipes.component';
import { FilterPipe } from './pipes/filter.pipe';
import { SideNavbarComponent } from './components/side-navbar/side-navbar.component';
import { EmployeesComponent } from './components/employees/employees.component';
import { CustomerCardComponent } from './components/customer-card/customer-card.component';
import { ShowCustomersComponent } from './components/show-customers/show-customers.component';
import { EmployeePipe } from './pipes/employee.pipe';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NavbarComponent,
    HomeComponent,
    RegisterComponent,
    AddCustomersComponent,
    EditCustomerComponent,
    PipesComponent,
    FilterPipe,
    SideNavbarComponent,
    EmployeesComponent,
    CustomerCardComponent,
    ShowCustomersComponent,
    EmployeePipe,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore()),
    NgbModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
