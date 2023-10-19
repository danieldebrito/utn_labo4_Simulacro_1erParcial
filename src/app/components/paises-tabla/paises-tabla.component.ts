import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Pais } from 'src/app/class/pais';
import { PaisesService } from 'src/app/services/paises.service';

@Component({
  selector: 'app-paises-tabla',
  templateUrl: './paises-tabla.component.html',
  styleUrls: ['./paises-tabla.component.scss']
})
export class PaisesTablaComponent implements OnInit {

  public paises: any[] = [];
  @Output() pasaPais = new EventEmitter();

  public p: number;  // paginacion primer page

  constructor(private paisesService: PaisesService) { this.p = 1; }

  public enviarPais(pais: any) {
    this.pasaPais.emit( pais );
  }

  public getPaises() {
    this.paisesService.gets().subscribe(res => {
      this.paises = res;
      console.log(this.paises);
    });
  }

  ngOnInit(): void {
    this.getPaises();
  }

}
