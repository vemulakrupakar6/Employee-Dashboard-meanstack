import { Injectable, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private apiUrl = 'http://localhost:3000/api';

  isLoggedIn = signal(false);
  currentUser = signal<string | null>(null);
  employeeId: number | null = null;
  employeeName: string | null = null;

  constructor(private http: HttpClient) {
    // Load persisted state
    const storedUser = localStorage.getItem('currentUser');
    const storedId = localStorage.getItem('employeeId');
    const storedName = localStorage.getItem('employeeName');
    if (storedUser && storedId) {
      this.isLoggedIn.set(true);
      this.currentUser.set(storedUser);
      this.employeeId = Number(storedId);
      this.employeeName = storedName;
    }
  }

   login(empId: string, password: string) {
    return this.http.post<any>(`${this.apiUrl}/login`, { empId: empId, password }).pipe(
      tap(res => {
        if (res && res.employee_id) {
          this.isLoggedIn.set(true);
          this.currentUser.set(empId);
          this.employeeId = res.employee_id;
          this.employeeName = res.emp_name; // ✅ 4. Capture the name on login

          localStorage.setItem('currentUser', empId);
          localStorage.setItem('employeeId', res.employee_id.toString());
          localStorage.setItem('employeeName', res.emp_name); // ✅ 5. Save name to storage
        }
      })
    );
  }

  logout() {
    this.isLoggedIn.set(false);
    this.currentUser.set(null);
    this.employeeId = null;
    this.employeeName = null;
    localStorage.clear();
  }
}
