import { Actor } from "./actor";

export enum ETipoPeli {
  Terror,
  Comedia,
  Amor,
  Triller,
  Otros
}

export class Pelicula {
  constructor(
    public id?: string,
    public nombre?: string,
    public tipo?: ETipoPeli,
    public fechaEstreno?: string,
    public cantPublico?: number,
    public fotoPelicula?: string,
    public actores?: Actor[]
  ) { }
}
