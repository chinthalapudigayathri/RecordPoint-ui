import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-add-employee',
  standalone: true,
  imports: [CommonModule, FormsModule, HttpClientModule],
  templateUrl: './add-employees.html',
  styleUrls: ['./add-employees.css']
})
export class AddEmployeeComponent {
  // Model bound to form inputs
  model = {
    username: '',
    email: '',
    password: '',
    roles: ['USER'],
    enabled: true
  };

  message = '';
  error = '';
  saving = false;

  constructor(private http: HttpClient) {}

  submit(): void {
    this.saving = true;
    this.http.post('http://localhost:8080/api/employees', this.model).subscribe({
      next: (response: any) => {
        this.message = `✅ Employee ${response.username} created successfully`;
        this.error = '';
        this.saving = false;
        // reset form
        this.model = { username: '', email: '', password: '', roles: ['USER'], enabled: true };
      },
      error: (err) => {
        console.error('Error creating employee', err);
        this.error = '❌ Failed to create employee';
        this.message = '';
        this.saving = false;
      }
    });
  }
}