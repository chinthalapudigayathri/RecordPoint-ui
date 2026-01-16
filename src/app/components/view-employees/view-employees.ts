import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Employee, EmployeeService } from '../../services/employee';
import { FormsModule } from '@angular/forms';

@Component({
  standalone: true,
  selector: 'app-view-employees',
  imports: [CommonModule, FormsModule, HttpClientModule],
  templateUrl: './view-employees.html',   
  styleUrls: ['./view-employees.css'],
})
export class ViewEmployees implements OnInit {
  employees: Employee[] = [];
  id: number | null = null;

  constructor(private employeeService: EmployeeService) {}

  ngOnInit() {
    this.loadAll(); // auto-load employees when page opens
  }

  loadAll() {
    this.employeeService.getAllEmployees().subscribe(data => {
      console.log('Employees from backend:', data); // debug
      this.employees = data;
    });

  }

  searchById() {
    if (this.id !== null) {
      this.employeeService.getEmployeeById(this.id).subscribe(emp => this.employees = [emp]);
    }
  }

}