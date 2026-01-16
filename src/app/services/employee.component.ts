import { Component, OnInit } from '@angular/core';
import { EmployeeService, Employee } from '../services/employee';
@Component({
  selector: 'app-employee',
  templateUrl: './employee.html'
})
export class EmployeeComponent implements OnInit {
 employees: Employee[] = [];


 constructor(private employeeService: EmployeeService) {}

  ngOnInit(): void {
    this.employeeService.getEmployees().subscribe(data => {
      this.employees = data;
    });
  }
}