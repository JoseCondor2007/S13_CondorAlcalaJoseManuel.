import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-participantes',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './participantes.component.html',
  styleUrl: './participantes.component.css'
})
export class ParticipantesComponent {
  participantes = [
    { id: 1, nombre: 'Ana Pérez', email: 'ana.perez@mail.com', evento: 'Taller de Angular', tipo: 'Estudiante' },
    { id: 2, nombre: 'Carlos López', email: 'carlos.lopez@mail.com', evento: 'Concierto de Rock', tipo: 'General' },
    { id: 3, nombre: 'María García', email: 'maria.garcia@mail.com', evento: 'Feria de Empleo', tipo: 'VIP' },
    { id: 4, nombre: 'José Ramírez', email: 'jose.ramirez@mail.com', evento: 'Conferencia Tech', tipo: 'Estudiante' },
    { id: 5, nombre: 'Laura Torres', email: 'laura.torres@mail.com', evento: 'Taller de Angular', tipo: 'General' }
  ];
}