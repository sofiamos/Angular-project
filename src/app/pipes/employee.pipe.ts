import { Pipe, PipeTransform } from '@angular/core';
import { Employee } from '../interfaces/Employee';

@Pipe({
  name: 'employee'
})
export class EmployeePipe implements PipeTransform {

  
transform(employees: Employee[], propName: keyof Employee, value: string): Employee[] {
  let filteredEmployees: Employee[] = []
  for(let employee of employees){
    if((employee[propName] as string)
    .toLowerCase()
    .includes(value.toLowerCase())
    ) {
      filteredEmployees.push(employee);
    }
  }


  return filteredEmployees;
 
}

}
function toLowerCase() {
throw new Error('Function not implemented.');
}

