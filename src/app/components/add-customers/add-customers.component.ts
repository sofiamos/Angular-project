import { Component, OnInit } from '@angular/core';
import { Customer } from 'src/app/interfaces/Customer';
import { CustomersService } from 'src/app/services/customers.service';

@Component({
  selector: 'app-add-customers',
  templateUrl: './add-customers.component.html',
  styleUrls: ['./add-customers.component.css']
})
export class AddCustomersComponent  implements OnInit{
  customer: Customer = {id:'',FirstName:'' ,LastName:'',Phone:'0' ,Email:''}
  
  constructor(private cu: CustomersService) {}



  ngOnInit(): void {
 
  }
  addNewCustomer() {
    this.cu
    .addCustomer(this.customer)
    .then(()=> {
      console.log("Customer was added !");
      this.reset();
    })
    .catch((err)=> console.log(err)
    );
  }

 reset() {
  this.customer = {id:'',FirstName:'' ,LastName:'',Phone:'' ,Email:''};

 }
}
