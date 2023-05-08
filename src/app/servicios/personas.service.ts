import { Injectable } from '@angular/core';
import { Persona } from '../models/persona.model';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root', //comento esto para poder crear distintas intacias del servicio
})
export class PersonasService {
  personas: Persona[];
  personas2: Persona[];
  variableNormal: string;
  private variableBehavior: BehaviorSubject<string>;
  private variableSubject: Subject<string>;

  constructor() {
    this.personas = [
      new Persona('Hernan', 'Fernandez', 26, true),
      new Persona('Guido', 'Farias', 33, false),
      new Persona('Juan', 'Perez', 55, false),
      new Persona('Alexis', 'Sanchez', 46, true),
    ];
    this.variableNormal = 'Hola';
    this.variableBehavior = new BehaviorSubject<string>('Hola'); //SI tiene valor inicial
    this.variableSubject = new Subject<string>(); //NO tiene valor inicial
  }

  getAll() {
    this.personas2 = this.personas;
    return this.personas2;
  }

  create(nuevaPersona: Persona) {
    this.personas.push(nuevaPersona);
  }

  getVariableNormal() {
    return this.variableNormal;
  }

  setVariableNormal(data) {
    this.variableNormal = data;
  }

  getVariableBehavior() {
    return this.variableBehavior.asObservable();
  }

  setVariableBehavior(data: string) {
    this.variableBehavior.next(data);
  }

  getVariableSubject() {
    return this.variableSubject.asObservable();
  }

  setVariableSubject(data: string) {
    this.variableSubject.next(data);
  }

  //función que filtra a las personas activas
  //una promesa no va a interrumpir el resto de los procesos que se ejecuten
  activos(): Promise<Persona[]> {
    //la promesa se va a resolver en un array de personas
    const prom = new Promise<Persona[]>((resolve, reject) => {
      //ponemos el tipo en concreto de lo que está resolviendo. Siempre recibe el metodo resolve y reject
      const arrTemp: Persona[] = [];
      for (let persona of this.personas) {
        if (persona.activo) {
          arrTemp.push(persona);
        }
      }
      resolve(arrTemp);
    });
    return prom;
  }

  activosV2(): Promise<Persona[]> {
    return new Promise((resolve, reject) => {
      const arrTemp = this.personas.filter((persona) => {
        //analizo si la persona pasa o no el filtro
        return persona.activo; //ya directamente si es activo devuleve true
      });
      resolve(arrTemp);
    });
  }
}
