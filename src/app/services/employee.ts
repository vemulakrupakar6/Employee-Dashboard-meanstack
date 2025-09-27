import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AuthService } from './auth.service';
import { throwError } from 'rxjs'; // Import throwError

@Injectable({ providedIn: 'root' })
export class EmployeeService {
  private apiUrl = 'http://localhost:3000/api';

  constructor(private http: HttpClient, private auth: AuthService) {}

  // 🔹 Fetch profile
  getProfile() {
    // This is correct, no changes needed here.
    return this.http.get<any>(`${this.apiUrl}/profile/${this.auth.employeeId}`);
  }

  // 🔹 Submit leave
  submitLeave(data: any) {
    const payload = {
      ...data,
      employee_id: this.auth.employeeId,
      // Proactive Fix: The backend needs the employee name for leave submission.
      emp_name: this.auth.employeeName 
    };
    return this.http.post<any>(`${this.apiUrl}/leaves`, payload);
  }

  // 🔹 Get payslip
  getPayslip() {
    // FIX: Check for the employee ID, not the employee name.
    if (!this.auth.employeeId) {
      return throwError(() => new Error('Employee ID not available. Cannot fetch payslip.'));
    }
    // FIX: Call the API using the employee ID, which matches the updated api.js route.
    return this.http.get<any>(`${this.apiUrl}/payslip/${this.auth.employeeId}`);
  }
}