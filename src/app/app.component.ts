import { Component } from '@angular/core';
import { Persona } from './models/persona.model';
import { PersonasService } from './servicios/personas.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [PersonasService] //agrego esto para poder tener una instancia exclusiva del servicio para este componente
})
export class AppComponent {

  arrPersonas: Persona[];

  constructor(private personasService: PersonasService){

  }

  ngOnInit(){
    this.arrPersonas = this.personasService.getAll();
  }

  onClick(){
    this.personasService.create(new Persona('Veronica', 'Diaz', 66, true));
  }

}
