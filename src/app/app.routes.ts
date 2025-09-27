import { Routes } from '@angular/router';
import { Profile } from './component/profile/profile';
import { Leave } from './component/leave/leave';
import { Payslip } from './component/payslip/payslip';
import { HomeComponent } from './component/home/home';
import { authGuard } from './auth-guard';

export const routes: Routes = [
  { path: '', component: HomeComponent },  // Default home page
  { path: 'profile', component: Profile, canActivate: [authGuard] },
  { path: 'leave', component: Leave, canActivate: [authGuard] },
  { path: 'payslip', component: Payslip, canActivate: [authGuard] },
  { path: '**', redirectTo: '' } // Wildcard fallback
];
