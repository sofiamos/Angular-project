
import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Customer } from 'src/app/interfaces/Customer';
import { CustomersService } from 'src/app/services/customers.service';
import { AddCustomersComponent } from '../add-customers/add-customers.component';
import { CustomerCardComponent } from '../customer-card/customer-card.component';
import { EditCustomerComponent } from '../edit-customer/edit-customer.component';

@Component({
  selector: 'app-show-customers',
  templateUrl: './show-customers.component.html',
  styleUrls: ['./show-customers.component.css']
})
export class ShowCustomersComponent implements OnInit {
  customers: Customer[]= [];
  FirstName: string=""
  LastName: string=""
  Phone:string=""

  constructor(private cu: CustomersService ,private modal:NgbModal){}


  ngOnInit(): void {
    this.cu.getCustomers().subscribe({
      next: (customersData: Customer[]) =>
       (this.customers =customersData),
    });
    
  }

  deleteCustomer(customer: Customer){
    if(confirm("Are You Sure?")){
      this.cu
      .deleteCustomer(customer)
      .then(()=> console.log("Customer Deleted successfully"))
      .catch((err) => console.log(err));

    }
   
  }

  updateCustomer(customer:Customer){
    let modalRef = this.modal.open(EditCustomerComponent ,
      { size:"lg",
        centered:true,
        windowClass:'dark-modal',
      })
      modalRef.componentInstance.id = customer.id;
  }

  CustomerCard(customer: Customer){
    let modalRef = this.modal.open(CustomerCardComponent, {
      size: "md",
      centered: true,
      windowClass: "dark-modal"
    })
    modalRef.componentInstance.id  = customer.id
    }


    addCard(){
      let modalRef = this.modal.open(AddCustomersComponent, {
        size: "lg",
        centered: true,
        windowClass: "dark-modal"
      })
      modalRef.componentInstance.id ;
      }
}