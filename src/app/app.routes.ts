import { Routes } from '@angular/router';
import { InicioComponent } from './views/inicio/inicio.component';
import { EventosComponent } from './views/eventos/eventos.component';
import { ParticipantesComponent } from './views/participantes/participantes.component';
import { CalendarioComponent } from './views/calendario/calendario.component';
import { LoginComponent } from './views/login/login.component';
import { AuthGuard } from './guards/auth.guard';

export const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'inicio', component: InicioComponent, canActivate: [AuthGuard] },
  { path: 'eventos', component: EventosComponent, canActivate: [AuthGuard] },
  { 
    path: 'participantes', 
    component: ParticipantesComponent, 
    canActivate: [AuthGuard],
    data: { requireAdmin: true }
  },
  { path: 'calendario', component: CalendarioComponent, canActivate: [AuthGuard] },
  // Volvemos a poner el login por defecto
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: '**', redirectTo: '/login' }
];