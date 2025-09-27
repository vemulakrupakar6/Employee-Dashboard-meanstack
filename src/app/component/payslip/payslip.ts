import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../../services/employee';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-payslip',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './payslip.html',
  styleUrl: './payslip.css'
})
export class Payslip implements OnInit {
  payslipData: any;
  errorMessage: string | null = null;

  constructor(private employeeService: EmployeeService) {}

  ngOnInit(): void {
    // The service call is now simpler
    this.employeeService.getPayslip().subscribe({
      next: (data) => {
        this.payslipData = data;
        this.errorMessage = null;
      },
      error: (err) => {
        console.error('Error fetching payslip:', err);
        this.errorMessage = err.error.message || 'Could not load payslip data.';
        this.payslipData = null;
      }
    });
  }
}