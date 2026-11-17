import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-eventos',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './eventos.component.html',
  styleUrl: './eventos.component.css'
})
export class EventosComponent {
  eventos = [
    { id: 1, nombre: 'Taller de Angular', categoria: 'Tecnología', fecha: '10 Dic 2025', lugar: 'Auditorio A', estado: 'Activo' },
    { id: 2, nombre: 'Concierto de Rock', categoria: 'Música', fecha: '12 Dic 2025', lugar: 'Estadio Principal', estado: 'Próximo' },
    { id: 3, nombre: 'Feria de Empleo', categoria: 'Laboral', fecha: '18 Dic 2025', lugar: 'Centro de Convenciones', estado: 'Próximo' },
    { id: 4, nombre: 'Workshop de Diseño', categoria: 'Diseño', fecha: '05 Dic 2025', lugar: 'Sala B', estado: 'Cancelado' },
    { id: 5, nombre: 'Conferencia Tech', categoria: 'Tecnología', fecha: '20 Dic 2025', lugar: 'Auditorio B', estado: 'Próximo' }
  ];
}