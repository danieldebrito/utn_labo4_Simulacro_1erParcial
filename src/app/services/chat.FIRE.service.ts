import { Injectable } from '@angular/core';
import { collection, collectionData, deleteDoc, doc, docData, Firestore, orderBy, query, setDoc, updateDoc } from '@angular/fire/firestore';
import { catchError, map, Observable, throwError } from 'rxjs';
import { Mensaje } from 'src/app/class/mensaje';

@Injectable({
  providedIn: 'root'
})
export class ChatService {
  constructor(private firestore: Firestore) { }

  public addItem(item: Mensaje) {
    const col = collection(this.firestore, 'mensajes');
    const newDoc = doc(col);

    item.id = newDoc.id; // guardo el id del documento que crea firebase
    setDoc(newDoc, item);
  }

  public getItems(): Observable<Mensaje[]> {
    const col = collection(this.firestore, 'mensajes');
    const queryObservable = query(col, orderBy('fecha')); // ordenar por fecha
    const observable = collectionData(queryObservable).pipe(
      map(res => {
        return res as Mensaje[];
      }),
      catchError(err => {
        console.error('Error obteniendo datos:', err);
        return throwError(() => err);
      })
    );
    return observable;
  }

  public getItemById(id: string): Observable<Mensaje> {
    const col = collection(this.firestore, 'mensajes');
    const documento = doc(col, id);

    const observable = docData(documento).pipe(
      map(res => {
        return res as Mensaje;
      }),
      catchError(err => {
        console.error('Error obteniendo el documento:', err);
        return throwError(() => err);
      })
    );
    return observable;
  }

  public update(id: string, Item: any) {
    const col = collection(this.firestore, 'mensajes');
    const documento = doc(col, id);

    updateDoc(documento, Item);
  }

  public delete(id: string) {
    const col = collection(this.firestore, 'mensajes');
    const documento = doc(col, id);

    deleteDoc(documento);
  }
}
