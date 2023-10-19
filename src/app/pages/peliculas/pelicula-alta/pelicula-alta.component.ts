import { Component, OnInit } from '@angular/core';
import { Actor } from 'src/app/class/actor';
import { ActoresService } from 'src/app/services/actores.service';
import { PeliculasService } from 'src/app/services/peliculas.service';

import { Storage, ref, uploadBytes, listAll, getDownloadURL } from '@angular/fire/storage';
import { Pelicula } from 'src/app/class/pelicula';

@Component({
  selector: 'app-pelicula-alta',
  templateUrl: './pelicula-alta.component.html',
  styleUrls: ['./pelicula-alta.component.scss']
})
export class PeliculaAltaComponent implements OnInit {


  public actores: Actor[] = [];
  public actoresPush: Actor[] = [];
  public images: string[] = [];

  url = '';

  public pelicula: Pelicula = {};

  constructor(
    private peliculasSv: PeliculasService,
    private storage: Storage,
    private actoresSv: ActoresService) { }

  public cargaPelicula(event: any) {

    this.pelicula = event;
    this.pelicula.fotoPelicula = this.url;

    this.peliculasSv.addItem(this.pelicula);
  }

  public addActor(event: Actor) {
    console.log(event);
    this.actoresPush.push(event);
    console.log(this.actoresPush);
  }

  public getActores() {
    this.actoresSv.getItems().subscribe(res => {
      this.actores = res;
      console.log(res);
    });
  }

  //////////////////////////////////////////////////////////////////////

  subirArchivo($event: any) {
    const file = $event.target.files[0];
    const imgRef = ref(this.storage, `images/${file.name}`);

    uploadBytes(imgRef, file)
    .then((snapshot) => {
      return getDownloadURL(snapshot.ref);
    })
    .then((downloadURL) => {

      this.url = downloadURL;
      this.getImages();
    })
    .catch((error) => console.log(error));
}

  getImages() {
    const imagesRef = ref(this.storage, 'images');

    listAll(imagesRef).then(async images => {
      this.images = [];
      for (let image of images.items) {
        const url = await getDownloadURL(image);
        this.images.push(url);

        console.log(images);
      }
    }).catch(error => console.log(error));
  }
  /////////////////////////////////////////////////////////////////

  ngOnInit(): void {
    this.getActores();
  }
}
