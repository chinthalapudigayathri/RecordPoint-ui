import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-delete-employees',
   standalone: true,
  imports: [CommonModule, FormsModule, HttpClientModule],
  templateUrl: './delete-employees.html',
  styleUrl: './delete-employees.css',
})
export class DeleteEmployees {
id: number = 0;

  constructor(private http: HttpClient) {}

  delete(): void {
    this.http.delete(`http://localhost:8080/api/employees/${this.id}`).subscribe({
      next: () => alert('✅ Employee deleted'),
      error: () => alert('❌ Delete failed')
    });
  }

}
