import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ActorAltaRoutingModule } from './actor-alta-routing.module';
import { ActorAltaComponent } from './actor-alta.component';
import { ComponentsModule } from 'src/app/components/components.module';


@NgModule({
  declarations: [
    ActorAltaComponent
  ],
  imports: [
    CommonModule,
    ActorAltaRoutingModule,
    ComponentsModule
  ]
})
export class ActorAltaModule { }
