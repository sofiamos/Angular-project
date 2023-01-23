import { Injectable } from '@angular/core';
import { collection, collectionData, doc, docData, Firestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Employee } from '../interfaces/Employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeesService {

  employeesRef = collection(this.firestore, "employees" )

  constructor(private firestore: Firestore) { }


  getEmployees(): Observable<Employee[]> {
    return collectionData(this.employeesRef, { idField: 'id' }) as Observable<
      Employee[]
    >;
  }

getEmployeeById(id: string){
let employeeRef  = doc(this.firestore, `employees/${id}`)
return docData(employeeRef, {idField: "id"}) as Observable<Employee>
}

}