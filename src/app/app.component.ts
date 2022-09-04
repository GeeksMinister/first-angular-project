import { Component } from '@angular/core';
import { Employee } from './models/Employee';
import { EmployeeService } from './services/employee-service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private employeeService: EmployeeService) { }

  title = 'Employees';
  employees: Employee[] = [];
  getFullName = (emp: Employee)  => emp.firstName + ' ' + emp.lastName;
  
  ngOnInit() {
    this.employeeService.getEmployees()
    .subscribe((result: Employee[]) => (this.employees = result));
  }
  

  

}



