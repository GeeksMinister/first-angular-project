import { Component, OnInit } from '@angular/core';
import { Employee } from './models/Employee';
import { EmployeeService } from './services/employee-service';

declare var window: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(private employeeService: EmployeeService) { }

  formModal: any;

  title = 'Employees';
  employees: Employee[] = [];
  getFullName = (emp: Employee)  => emp.firstName + ' ' + emp.lastName;
  
  ngOnInit() {
    this.employeeService.getEmployees()
    .subscribe((result: Employee[]) => (this.employees = result));

    this.formModal = new window.bootstrap.Modal(
      document.getElementById("exampleModal")
    );

  }
  
  openModal(){
    this.formModal.show();
  }

  doSomething(){
    this.formModal.hide();
  }
  

}



