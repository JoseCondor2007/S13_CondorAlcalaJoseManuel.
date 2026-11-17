import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-calendario',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './calendario.component.html',
  styleUrl: './calendario.component.css'
})
export class CalendarioComponent {
  eventosCalendario = [
    { dia: '05', mes: 'Dic', titulo: 'Workshop de Diseño', hora: '10:00 - 13:00', color: '#ef4444' },
    { dia: '10', mes: 'Dic', titulo: 'Taller de Angular', hora: '14:00 - 17:00', color: '#10b981' },
    { dia: '12', mes: 'Dic', titulo: 'Concierto de Rock', hora: '19:00 - 23:00', color: '#f59e0b' },
    { dia: '18', mes: 'Dic', titulo: 'Feria de Empleo', hora: '09:00 - 18:00', color: '#6366f1' },
    { dia: '20', mes: 'Dic', titulo: 'Conferencia Tech', hora: '15:00 - 19:00', color: '#06b6d4' }
  ];
}