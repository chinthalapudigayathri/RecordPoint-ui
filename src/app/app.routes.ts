import { Routes } from '@angular/router';
import { ViewEmployees } from './components/view-employees/view-employees';
import { AddEmployeeComponent } from './components/add-employees/add-employees';
import { UpdateEmployees } from './components/update-employees/update-employees';
import { DeleteEmployees } from './components/delete-employees/delete-employees';

export const routes: Routes = [
  { path: 'view', component: ViewEmployees },
  { path: 'add', component: AddEmployeeComponent },
  { path: 'update', component: UpdateEmployees },
  { path: 'delete', component: DeleteEmployees },
  { path: '', redirectTo: '/view', pathMatch: 'full' }
];