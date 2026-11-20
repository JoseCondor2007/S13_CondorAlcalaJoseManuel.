import { Injectable, inject } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private readonly ADMIN_EMAIL = 'admin@eventos.com';
  private readonly ADMIN_PASS = 'admin123';
  private readonly USER_EMAIL = 'usuario@eventos.com';
  private readonly USER_PASS = 'user123';
  
  private readonly SESSION_KEY = 'eventmaster_session';
  
  public showLoginWarning = false; 
  public showLogoutMessage = false; 
  
  // Nuevas variables para mostrar en el menú
  public currentRole: 'admin' | 'user' | null = null;
  public currentEmail: string | null = null;

  private router = inject(Router);

  login(email: string, password: string): boolean {
    let role: 'admin' | 'user' | null = null;

    if (email === this.ADMIN_EMAIL && password === this.ADMIN_PASS) {
      role = 'admin';
    } else if (email === this.USER_EMAIL && password === this.USER_PASS) {
      role = 'user';
    }

    if (role) {
      this.currentRole = role;
      this.currentEmail = email; // Guardamos el email
      localStorage.setItem(this.SESSION_KEY, JSON.stringify({ email, role, loginAt: new Date() }));
      this.showLoginWarning = false; 
      return true;
    }
    return false;
  }

  isAuthenticated(): boolean {
    const session = localStorage.getItem(this.SESSION_KEY);
    if (session) {
      const data = JSON.parse(session);
      // Recuperamos el rol y el email al recargar la página
      this.currentRole = data.role;
      this.currentEmail = data.email;
      return true;
    }
    return false;
  }

  isAdmin(): boolean {
    return this.currentRole === 'admin';
  }

  logout(): void {
    localStorage.removeItem(this.SESSION_KEY);
    this.currentRole = null;
    this.currentEmail = null;
    this.showLogoutMessage = true; 
  }

  goToLogin(): void {
    this.showLoginWarning = false;
    this.showLogoutMessage = false; 
    this.router.navigate(['/login']);
  }

  confirmLogout(): void {
    this.showLogoutMessage = false;
    this.router.navigate(['/login']);
  }
}