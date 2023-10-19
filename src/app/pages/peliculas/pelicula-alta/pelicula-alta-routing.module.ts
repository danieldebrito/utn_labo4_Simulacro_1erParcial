import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PeliculaAltaComponent } from './pelicula-alta.component';

const routes: Routes = [{ path: '', component: PeliculaAltaComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PeliculaAltaRoutingModule { }
