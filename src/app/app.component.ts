import { Component } from '@angular/core';
import { Persona } from './models/persona.model';
import { PersonasService } from './servicios/personas.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  arrPersonas: Persona[];

  constructor(private personasService: PersonasService){

  }

  ngOnInit(){
    this.arrPersonas = this.personasService.getAll();
  }

}
