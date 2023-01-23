import { Component, Input, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Customer } from 'src/app/interfaces/Customer';
import { CustomersService } from 'src/app/services/customers.service';

@Component({
  selector: 'app-customer-card',
  templateUrl: './customer-card.component.html',
  styleUrls: ['./customer-card.component.css']
})
export class CustomerCardComponent implements OnInit {
  customers: Customer[]=[];
  @Input() id! : string;
  customer: Customer = {id:'',FirstName:'' ,LastName:'',Phone:'0' ,Email:''}


  constructor(private cu: CustomersService, private activeModal:NgbActiveModal) {}

  
  ngOnInit(): void {
    this.cu.getCustomerById(this.id).subscribe({
      next:(customerData: Customer) => (this.customer = customerData),
    });
 
  }
  

  showCustomerCard() {
    this.cu
    .updateCustomer(this.customer)
    .then(() => this.activeModal.close())
    .catch((err) => console.log(err));

  }
 
}
