// src/app/component/leave/leave.ts

import { Component } from '@angular/core';
import { EmployeeService } from '../../services/employee';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; // 👈 1. Import FormsModule

@Component({
  selector: 'app-leave',
  standalone: true, // Mark component as standalone
  imports: [CommonModule, FormsModule], // 👈 2. Add FormsModule here
  templateUrl: './leave.html',
  styleUrl: './leave.css'
})
export class Leave {
  employee: any;
  
  // 👇 3. Create an object to hold the form data
  leaveData = {
    emp_name:'',
    from_date: '',
    from_session: 'Full Day',
    to_date: '',
    to_session: 'Full Day',
    manager_mail: '',
    description: ''
  };

  constructor(private employeeService: EmployeeService) {
    this.employeeService.getProfile().subscribe({
      next: (data) => {
        this.employee = data;
        this.leaveData.emp_name = this.employee.emp_name;
      },
      error: (err) => {
        console.error('Error loading employee for leave:', err);
      }
    });
  }

  // 👇 4. Create the function to handle form submission
  onSubmit() {
  
    const submissionData = {
      ...this.leaveData,
      session: `From: ${this.leaveData.from_session}, To: ${this.leaveData.to_session}`
    };
   console.log(submissionData);
    this.employeeService.submitLeave(submissionData).subscribe({
      next: (response) => {
        alert('Leave application submitted successfully!');
        // Optionally, reset the form
        this.employee.emp_name ='',
        this.leaveData.from_date = '';
        this.leaveData.to_date = '';
        this.leaveData.manager_mail = '';
        this.leaveData.description = '';
      },
      error: (err) => {
        console.error('Error submitting leave:', err);
        alert('Failed to submit leave application. Please try again.');
      }
    });
  }
}