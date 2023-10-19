import { Component } from '@angular/core';
import { ActoresService } from 'src/app/services/actores.service';

@Component({
  selector: 'app-actor-alta',
  templateUrl: './actor-alta.component.html',
  styleUrls: ['./actor-alta.component.scss']
})
export class ActorAltaComponent {

  constructor( private actoresSv: ActoresService ) { }


  public pais: any = {};

  public asignaPais(event: any) {
    this.pais = event;
  }

  public cargaActor(event: any) {
    console.log(event);
    this.actoresSv.addItem(event);
  }

}
