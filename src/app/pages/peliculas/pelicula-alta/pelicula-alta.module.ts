import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PeliculaAltaRoutingModule } from './pelicula-alta-routing.module';
import { PeliculaAltaComponent } from './pelicula-alta.component';
import { ComponentsModule } from 'src/app/components/components.module';


@NgModule({
  declarations: [
    PeliculaAltaComponent
  ],
  imports: [
    CommonModule,
    PeliculaAltaRoutingModule,
    ComponentsModule
  ]
})
export class PeliculaAltaModule { }
