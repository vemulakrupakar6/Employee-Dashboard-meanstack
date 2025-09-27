// src/app/auth-guard.ts

import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
  // FIX: Check for 'currentUser' which is set by AuthService on login.
  const user = localStorage.getItem('currentUser');
  const router = inject(Router);

  if (user) {
    return true; // A user exists, so allow navigation
  } else {
    alert('You must login to access this page.');
    router.navigateByUrl('/');
    return false; // No user found, block and redirect
  }
};