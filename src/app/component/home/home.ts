import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../../services/auth.service';

// Angular Material imports
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
    MatCheckboxModule,
  ],
  templateUrl: './home.html',
  styleUrls: ['./home.css'], // ✅ fixed plural styleUrls
})
export class HomeComponent {
  empId: string = '';
  password: string = '';
  rememberMe: boolean = false;
  hidePassword: boolean = true; // toggle eye icon

  constructor(public auth: AuthService) {}

  login() {
    console.log("enteres");
    console.log(this.empId,this.password);
    this.auth.login(this.empId, this.password).subscribe({
      next: () => {
        if (this.rememberMe) {
          localStorage.setItem('rememberMe', 'true');
        } else {
          localStorage.removeItem('rememberMe');
        }

        this.empId = '';
        this.password = '';
      },
      error: () => {
        alert('Invalid credentials!');
      },
    });
  }
}
