import { Injectable } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
  const token = localStorage.getItem('jwt');
  if (token) {
    return true;
  } else {
    // Redirect to login if not authenticated
    window.location.href = '/app-login';
    return false;
  }
};