import { Injectable } from '@angular/core';
import {
  Firestore,
  addDoc,
  collection,
  collectionData,
  query,
  where,
} from '@angular/fire/firestore';
import IActor from '../interfaces/actor';
import IPelicula from '../interfaces/pelicula';
import { Observable, filter, retry } from 'rxjs';
import { DocumentData } from 'rxfire/firestore/interfaces';
export type ItemPeliculaid = {
  id: string;
  peliculaRef:string;
}
@Injectable({
  providedIn: 'root'
})
export class FirestoreService {

  constructor(private firestore: Firestore) { }
  //Actor
  addActor(actor: IActor){
    const aCollection = collection(this.firestore, 'actores');
    return addDoc(aCollection, actor);
  }
  addPeliculaAActor(actorid:string,peliculaid: string){
    const aCollection = collection(this.firestore,`actores/${actorid}/peliculas`)
    return addDoc(aCollection,  { peliculaRef: peliculaid })
  }
  getActores(): Observable<IActor[]>{
    const actorRef = collection(this.firestore, 'actores');
    return collectionData(actorRef, {idField:'id'}) as Observable<IActor[]>;
  }
  getActoresPeliculas( actorId:string): Observable<ItemPeliculaid[]>{
    const actorRef = collection(this.firestore, `actores/${actorId}/peliculas`);
    return collectionData(actorRef, {idField:'id'}) as Observable<ItemPeliculaid[]>;
  }
  
  

//Pelicula
  addPelicula(actor: IPelicula){
    const aCollection = collection(this.firestore, 'peliculas');
    return addDoc(aCollection, actor);
  }
  addActorDePelicula(peliculaId:string, actor: IActor){
    const aCollection = collection(this.firestore,`peliculas/${peliculaId}/actores`)
    return addDoc(aCollection, actor)
  }
  getPeliculas(): Observable<IPelicula[]>{
    const actorRef = collection(this.firestore, 'peliculas');
    return collectionData(actorRef, {idField:'id'}) as Observable<IPelicula[]>;
  }

  // getPeliculasidRef(idRefs: string[]): Observable<IPelicula[]> {
  //   const peliculasCollection = collection(this.firestore, 'peliculas');

  //   return collectionData(peliculasCollection, {idField:'id'}) as Observable<IPelicula[]>;
  // }

}
