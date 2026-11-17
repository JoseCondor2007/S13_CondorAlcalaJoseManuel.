import { Routes } from '@angular/router';
import { InicioComponent } from './views/inicio/inicio.component';
import { EventosComponent } from './views/eventos/eventos.component';
import { ParticipantesComponent } from './views/participantes/participantes.component';
import { CalendarioComponent } from './views/calendario/calendario.component';

export const routes: Routes = [
  { path: 'inicio', component: InicioComponent },
  { path: 'eventos', component: EventosComponent },
  { path: 'participantes', component: ParticipantesComponent },
  { path: 'calendario', component: CalendarioComponent },
  { path: '', redirectTo: '/inicio', pathMatch: 'full' },
  { path: '**', redirectTo: '/inicio' }
];