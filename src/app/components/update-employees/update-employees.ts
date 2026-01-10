import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-update-employees',
  standalone: true,
  imports: [CommonModule, FormsModule, HttpClientModule],
  templateUrl: './update-employees.html',
  styleUrl: './update-employees.css',
})
export class UpdateEmployees {
id: number = 0;
  model = {
    email: '',
    password: '',
    roles: ['USER'],
    enabled: true
  };

  constructor(private http: HttpClient) {}

  update(): void {
    this.http.put(`http://localhost:8080/api/employees/${this.id}`, this.model).subscribe({
      next: () => alert('✅ Employee updated'),
      error: () => alert('❌ Update failed')
    });
  }

}
