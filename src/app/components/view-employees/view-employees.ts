import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-view-employees',
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  templateUrl: './view-employees.html',
  styleUrl: './view-employees.css',
})
export class ViewEmployees implements OnInit{
  employees: any[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
   this.http.get<any[]>('http://localhost:8080/api/employees').subscribe({
      next: (data) => this.employees = data,
      error: (err) => console.error('❌ Failed to fetch employees', err)
    });

  }

}
