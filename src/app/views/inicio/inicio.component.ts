import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-inicio',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './inicio.component.html',
  styleUrl: './inicio.component.css'
})
export class InicioComponent {
  kpis = [
    { label: 'Eventos Activos', value: 12, color: '#10b981', icon: '📅' },
    { label: 'Participantes Registrados', value: 450, color: '#6366f1', icon: '👥' },
    { label: 'Próximo Evento', value: '15 Dic', color: '#f59e0b', icon: '⏰' },
    { label: 'Eventos Cancelados', value: 2, color: '#ef4444', icon: '❌' }
  ];

  eventosRecientes = [
    { nombre: 'Taller de Angular', fecha: '10 Dic 2025', estado: 'Activo' },
    { nombre: 'Concierto de Rock', fecha: '12 Dic 2025', estado: 'Próximo' },
    { nombre: 'Feria de Empleo', fecha: '18 Dic 2025', estado: 'Próximo' }
  ];
}