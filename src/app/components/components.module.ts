import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';

import { ActorAltaFormComponent } from 'src/app/components/actor-alta-form/actor-alta-form.component';
import { PaisesTablaComponent } from './paises-tabla/paises-tabla.component';
import { PaisItemComponent } from './pais-item/pais-item.component';

@NgModule({
  declarations: [
    ActorAltaFormComponent,
    PaisesTablaComponent,
    PaisItemComponent
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
    PaisItemComponent
  ]
})
export class ComponentsModule { }
