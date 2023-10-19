import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';
import { Actor } from 'src/app/class/actor';
import { Pelicula, ETipoPeli } from 'src/app/class/pelicula';

@Component({
  selector: 'app-pelicula-alta-form',
  templateUrl: './pelicula-alta-form.component.html',
  styleUrls: ['./pelicula-alta-form.component.scss']
})
export class PeliculaAltaFormComponent {

  @Input() pais: any = {};
  @Input() actoresPush: Actor[] = [];

  @Output() pasaPelicula = new EventEmitter();

  altaForm = new FormGroup({
    nombre: new FormControl('', [
      Validators.required,
      Validators.minLength(2),
      Validators.maxLength(140)
    ]),
    tipo: new FormControl('', [
      Validators.required
    ]),
    fechaEstreno: new FormControl('', [
      Validators.required
    ]),
    cantPublico: new FormControl('', [
      Validators.required,
      Validators.maxLength(40),
      Validators.pattern("^[0-9]+")
    ]),
    fotoPelicula: new FormControl('/assets/actores/ted.jpg', [
      Validators.required
    ]),
    /*
    terminos: new FormControl('', [
      Validators.required
    ]),*/
  });

  constructor() { }

  public resetForm() {
    this.altaForm.reset({
      nombre: '',
      tipo: '',
      fechaEstreno: '',
      cantPublico: '',
      fotoPelicula: '',
      // terminos: '',
    });
  }

  cargarPelicula() {
    if (this.altaForm.valid) {
      const peli: Pelicula = {
        nombre: this.altaForm.value.nombre ?? undefined,
        tipo: ETipoPeli[this.altaForm.value.tipo as keyof typeof ETipoPeli],
        fechaEstreno: this.altaForm.value.fechaEstreno ?? undefined,
        cantPublico: this.altaForm.value.cantPublico ? +this.altaForm.value.cantPublico : undefined,
        fotoPelicula: this.altaForm.value.fotoPelicula ?? undefined,
      };

      peli.actores = this.actoresPush;

      this.pasaPelicula.emit(peli);
      this.resetForm();
    }
  }


  ngOnInit(): void { }
}
