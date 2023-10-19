import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Actor } from 'src/app/class/actor';

@Component({
  selector: 'app-actor-listado',
  templateUrl: './actor-listado.component.html',
  styleUrls: ['./actor-listado.component.scss']
})
export class ActorListadoComponent {

  public p: number = 1;  // paginacion primer page

  @Input() data: Actor[] = [];
  @Output() lanzaItem = new EventEmitter();

    constructor() { }

    public enviaItem(event: any){
      this.lanzaItem.emit(event);
    }
  }

