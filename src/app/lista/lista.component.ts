import { Component, OnInit } from '@angular/core';
import { Persona } from '../models/persona.model';
import { PersonasService } from '../servicios/personas.service';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css'],
  providers: [PersonasService] //agrego esto para poder tener una instancia exclusiva del servicio para este componente
})
export class ListaComponent implements OnInit {

  arrPersonas: Persona[];

  constructor(private personaService: PersonasService) { }

  ngOnInit(): void {
    this.arrPersonas = this.personaService.getAll();
  }

}
