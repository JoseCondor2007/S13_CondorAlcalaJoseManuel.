import { Injectable, inject } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  private authService = inject(AuthService);

  canActivate(route: ActivatedRouteSnapshot): boolean {
    // 1. Verificamos si está logueado
    if (!this.authService.isAuthenticated()) {
      this.authService.goToLogin(); // Si no está logueado, al login
      return false;
    }

    // 2. Verificamos si la ruta requiere ser Admin
    if (route.data['requireAdmin'] && !this.authService.isAdmin()) {
      // Si requiere admin y no lo es, mostramos el modal
      this.authService.showLoginWarning = true;
      return false; 
    }

    // Si está logueado y cumple los requisitos, pasa
    return true;
  }
}