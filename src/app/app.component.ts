import { Component } from '@angular/core';
import { Employee } from './models/Employee';
import { EmployeeService } from './services/employee-service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Employees';
  employees: Employee[] = [];
  constructor(private employeeService: EmployeeService) { }

  ngOnInit() {
    this.employeeService.getEmployees()
      .subscribe((result: Employee[]) => (this.employees = result));
  }

  getFullName = (emp: Employee): string => {
    return emp.firstName + ' ' + emp.lastName;
  }

}



