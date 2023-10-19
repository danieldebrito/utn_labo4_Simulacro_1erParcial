import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';

import { ActorAltaFormComponent } from 'src/app/components/actor-alta-form/actor-alta-form.component';
import { PaisesTablaComponent } from './paises-tabla/paises-tabla.component';
import { PaisItemComponent } from './pais-item/pais-item.component';
import { PeliculaAltaFormComponent } from './pelicula-alta-form/pelicula-alta-form.component';
import { ActorListadoComponent } from './actor-listado/actor-listado.component';

@NgModule({
  declarations: [
    ActorAltaFormComponent,
    PaisesTablaComponent,
    PaisItemComponent,
    PeliculaAltaFormComponent,
    ActorListadoComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NgxPaginationModule
  ],
  exports: [
    ActorAltaFormComponent,
    PaisesTablaComponent,
    PaisItemComponent,
    PeliculaAltaFormComponent,
    ActorListadoComponent
  ]
})
export class ComponentsModule { }
