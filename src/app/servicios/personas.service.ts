import { Injectable } from '@angular/core';
import { Persona } from '../models/persona.model';

@Injectable(//{
  //providedIn: 'root'  //comento esto para poder crear distintas intacias del servicio
//}
)
export class PersonasService {

  personas: Persona[];

  constructor() { 
    this.personas = [
      new Persona('Hernan','Fernandez',26,true),
      new Persona('Guido','Farias',33,false),
      new Persona('Juan','Perez',55,false),
      new Persona('Alexis','Sanchez',46,true),
    ]
  }

  getAll() {
    return this.personas;
  }

  create(nuevaPersona: Persona){
    this.personas.push(nuevaPersona);
  }
}
