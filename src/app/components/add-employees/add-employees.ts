import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

// ✅ Import both from the same file
import { EmployeeService, Employee } from '../../services/employee';

@Component({
  standalone: true,
  selector: 'app-add-employee',
  template: `
    <h2>Add Employee</h2>
    <form (ngSubmit)="addEmployee()">
      <input [(ngModel)]="employee.username" name="username" placeholder="Username" required>
      <input [(ngModel)]="employee.email" name="email" placeholder="Email" required>
      <input [(ngModel)]="employee.password" name="password" placeholder="Password" required>
      <input [(ngModel)]="employee.roles[0]" name="roles" placeholder="Role" required>
      <button type="submit">Add</button>
    </form>
  `,
  imports: [CommonModule, FormsModule, HttpClientModule],
  providers: [EmployeeService]
})
export class AddEmployeeComponent {
  employee: Employee = {
    username: '',
    email: '',
    password: '',
    roles: ['']
  };

  constructor(private employeeService: EmployeeService) {}

  addEmployee() {
    this.employeeService.addEmployee(this.employee).subscribe(() => {
      alert('Employee added!');
    });
  }
}