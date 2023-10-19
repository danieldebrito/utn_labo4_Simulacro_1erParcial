import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { Actor } from 'src/app/class/actor';

@Component({
  selector: 'app-actor-alta-form',
  templateUrl: './actor-alta-form.component.html',
  styleUrls: ['./actor-alta-form.component.scss']
})
export class ActorAltaFormComponent {

  public errorPais = false;
  public paisCargado = false;

  @Input() pais: any = {};
  @Output() pasaActor = new EventEmitter();


  altaForm = new FormGroup({
    nombre: new FormControl('', [Validators.required, Validators.minLength(2), Validators.maxLength(40), Validators.pattern("[a-zA-Z ]{2,41}"), this.spacesValidator]),
    apellido: new FormControl('', [Validators.required, Validators.maxLength(40), Validators.pattern("[a-zA-Z ]{1,41}")]),
    sexo: new FormControl('', [Validators.required]),
    fechaNacimiento: new FormControl('', [Validators.required]),
    foto: new FormControl('/assets/actores/ted.jpg', [Validators.required]),
    // paisOrigen: new FormControl(''),
    terminos: new FormControl('', [Validators.required]),
  });

  constructor() { }


  // CUSTOM VALIDATOR
  private spacesValidator(control: AbstractControl): null | object {
    const nombre = <string>control.value;
    const spaces = nombre.includes(' ');

    return spaces
      ? { containsSpaces: true }
      : null;
  }

  public resetFrom() {
    this.altaForm.reset({
      nombre: '',
      apellido: '',
      sexo: '',
      fechaNacimiento: '',
      foto: '',
      //terminos: '',
    });
  }

  cargarActor() {
    if (this.altaForm.valid) {
      const actor: Actor = {
        nombre: this.altaForm.value.nombre ?? undefined,
        apellido: this.altaForm.value.apellido ?? undefined,
        sexo: this.altaForm.value.sexo ?? undefined,
        fechaNacimiento: this.altaForm.value.fechaNacimiento ?? undefined,
        foto: this.altaForm.value.foto ?? undefined,
        paisOrigen: this.pais
      };

      this.pasaActor.emit( actor );


      this.resetFrom();

    }
  }

  public asignaPais(event: any){
    this.pais = event;
    this.paisCargado = true;
  }

  ngOnInit(): void {
  }
}
