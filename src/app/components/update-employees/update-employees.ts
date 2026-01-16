import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Employee, EmployeeService } from '../../services/employee';


@Component({
  standalone: true,
  selector: 'app-update-employee',
  template: `
    <h2>Update Employee</h2>
    <form (ngSubmit)="updateEmployee()">
      <input [(ngModel)]="employee.id" name="id" placeholder="ID" required>
      <input [(ngModel)]="employee.username" name="name" placeholder="Name">
      <input [(ngModel)]="employee.email" name="email" placeholder="Email">
      <input [(ngModel)]="employee.password" name="password" placeholder="Password">
      <input [(ngModel)]="employee.roles[0]" name="roles" placeholder="Role">
      <button type="submit">Update</button>
    </form>
  `,
  imports: [CommonModule, FormsModule]
})
export class UpdateEmployees {
  employee: Employee = {
    id: 0, username: '', email: '',
    password: '',
    roles: ['']
  };

  constructor(private employeeService: EmployeeService) {}

  updateEmployee() {
    if (this.employee.id) {
      this.employeeService.updateEmployee(this.employee.id, this.employee).subscribe(() => {
        alert('Employee updated!');
      });
    }
  }
}