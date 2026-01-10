import { Component, ModuleWithProviders, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})



export class App {
  protected readonly title = signal('employeemgmt');
  login(): void {
  // Force browser to call Spring Boot backend
  window.location.href = 'http://localhost:8080/oauth2/authorization/github';
}

}

