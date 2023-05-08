import { Component, OnInit } from '@angular/core';
import { Persona } from '../models/persona.model';
import { PersonasService } from '../servicios/personas.service';

@Component({
  selector: 'app-tabla',
  templateUrl: './tabla.component.html',
  styleUrls: ['./tabla.component.css'],
})
export class TablaComponent implements OnInit {
  arrPersonas: Persona[];

  constructor(private personasService: PersonasService) {}

  ngOnInit() {
    this.arrPersonas = this.personasService.getAll();
  }

  onClick() {
    this.personasService.create(new Persona('Veronica', 'Diaz', 66, true));
  }

  update() {
    this.personasService.setVariableNormal('Hola de nuevo'); //Método tradicional no funciona
    this.personasService.setVariableBehavior('Hola de nuevo');
    this.personasService.setVariableSubject('Hola de nuevo');
  }

  //METODO TRADICIONAL PARA RECUPERAR LA PROMESA
  onClickActivas() {
    this.personasService
      .activosV2() //llamo al servicio. Como me devuelve una promesa hago lo siguiente:
      .then((arrTempPersonas) => console.log(arrTempPersonas))
      .catch((error) => console.log(error));
  }

  //METODO MODERNO PARA RECUPERAR LA PROMESA
  async onClickActivasV2() {
    //async: va en el ámbito donde se utilice el await
    try {
      //para capturar si se produce un error
      this.arrPersonas = await this.personasService.activosV2(); //await: espera la ejecucion y luego haz las siguientes lineas que siguen
    } catch (error) {
      console.log(error);
    }
  }
}
