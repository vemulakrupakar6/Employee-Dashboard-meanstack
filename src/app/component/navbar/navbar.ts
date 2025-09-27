import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { MatIconModule } from '@angular/material/icon';



@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterModule,MatIconModule ],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css'
})
export class NavbarComponent {
[x: string]: any;

  title = 'My Company';
  menuOpen = false;

  constructor(public auth: AuthService, private router: Router) {}

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }

  logout() {
    this.auth.logout();
    this.menuOpen = false; // close menu on logout
    this.router.navigateByUrl('/');
  }

}
