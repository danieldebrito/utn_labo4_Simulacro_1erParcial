import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-pais-item',
  templateUrl: './pais-item.component.html',
  styleUrls: ['./pais-item.component.scss']
})
export class PaisItemComponent {

  @Input() pais: any = {};
  @Output() pasaPais = new EventEmitter();

  public enviarPais(pais: any) {
    this.pasaPais.emit( pais );
  }

}
