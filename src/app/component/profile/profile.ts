import { Component } from '@angular/core';
import { EmployeeService } from '../../services/employee';

@Component({
  selector: 'app-profile',
  imports: [],
  templateUrl: './profile.html',
  styleUrl: './profile.css'
})
export class Profile {
  employee: any;

  constructor(private employeeService: EmployeeService) {
    this.employeeService.getProfile().subscribe({
  next: (data) => {
     if (data && data.onbording_date) {
          // Create a new Date object from the ISO string
          const date = new Date(data.onbording_date);
          // Format the date to 'YYYY-MM-DD' and update the data object
          data.onbording_date = date.toISOString().split('T')[0];
        }
    this.employee = data;
    console.log(data);
  },
  error: (err) => {
    console.error('Error loading profile:', err);
  }
});

  }

}
