import { Injectable } from '@angular/core';
import { Firestore , collection, collectionData, docData} from '@angular/fire/firestore';
import { addDoc, deleteDoc, doc, setDoc } from 'firebase/firestore';
import { Observable } from 'rxjs';
import { Customer } from '../interfaces/Customer';



@Injectable({
  providedIn: 'root'
})
export class CustomersService {
  customerRef = collection(this.firestore, 'customers');

  constructor(private firestore: Firestore) { }



  //Add New Customer
  addCustomer(customer: Customer ) : Promise<any> {
    return addDoc(this.customerRef, customer) as Promise<any>;
  }

//get all Customers

getCustomers(): Observable<Customer[]> {
  return collectionData(this.customerRef, { idField: 'id' }) as Observable<Customer[]>;
}


//updat customer
updateCustomer(newCustomer: Customer) : Promise<any> {
  let customerRef = doc(this.firestore, `customers/${newCustomer.id}`);
  return setDoc(customerRef,newCustomer) as Promise<any>;
  
}


//delete specific customer
deleteCustomer(customer: Customer): Promise<void> {
  let customerRef = doc(this.firestore, `customers/${customer.id}`)
  return deleteDoc(customerRef) as Promise<void>;

}
//get specific customer
getCustomerById(id: string): Observable<Customer> {
  let customerRef = doc(this.firestore, `customers/${id}`);
  return docData(customerRef,{idField:"id"}) as Observable<Customer>
;

}

}
