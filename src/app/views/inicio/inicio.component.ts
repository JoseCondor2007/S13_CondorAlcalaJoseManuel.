import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-inicio',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './inicio.component.html',
  styleUrl: './inicio.component.css'
})
export class InicioComponent {
  public authService = inject(AuthService);

  kpis: any[] = [];

  ngOnInit() {
    // KPIs base para todos
    this.kpis = [
      { label: 'Eventos Activos', value: 12, color: '#10b981', icon: '📅' },
      { label: 'Próximo Evento', value: '15 Dic', color: '#f59e0b', icon: '⏰' },
      { label: 'Eventos Cancelados', value: 2, color: '#ef4444', icon: '❌' }
    ];

    // KPI exclusivo para Admin
    if (this.authService.isAdmin()) {
      // Lo insertamos en la posición 1 (segundo lugar)
      this.kpis.splice(1, 0, { label: 'Participantes Registrados', value: 450, color: '#6366f1', icon: '👥' });
    }
  }

  eventosRecientes = [
    { nombre: 'Taller de Angular', fecha: '10 Dic 2025', estado: 'Activo' },
    { nombre: 'Concierto de Rock', fecha: '12 Dic 2025', estado: 'Próximo' },
    { nombre: 'Feria de Empleo', fecha: '18 Dic 2025', estado: 'Próximo' }
  ];
}