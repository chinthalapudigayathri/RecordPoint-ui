import { Component, OnInit } from '@angular/core';
import { Employee } from '../services/employee';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.html'
})
export class EmployeeComponent implements OnInit {
  employees: any[] = [];

  constructor(private employeeService: Employee) {}

  ngOnInit(): void {
    this.employeeService.getEmployees().subscribe(data => {
      this.employees = data;
    });
  }
}