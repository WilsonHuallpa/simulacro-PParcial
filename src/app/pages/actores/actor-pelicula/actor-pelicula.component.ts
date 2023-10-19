import { Component, OnInit } from '@angular/core';
import IActor from 'src/app/interfaces/actor';
import IPelicula from 'src/app/interfaces/pelicula';
import { BanderasService } from 'src/app/services/banderas.service';
import { FirestoreService } from 'src/app/services/firestore.service';
export type ActorPais = {
  usuario: string;
  nombrePais: string;
  flag: string;
  region: string;
  languages: string;
};

@Component({
  selector: 'app-actor-pelicula',
  templateUrl: './actor-pelicula.component.html',
  styleUrls: ['./actor-pelicula.component.scss'],
})
export class ActorPeliculaComponent implements OnInit {
  actores!: IActor[];
  actorPais!: ActorPais;
  actorDetalles!: IActor;
  actorPelicula!: IPelicula[];
  

 
  constructor(
    private firestore: FirestoreService,
    private bandera: BanderasService
  ) {}
  ngOnInit(): void {
    this.firestore.getActores().subscribe((data) => {
      this.actores = data;
      console.log('listado de actores', this.actores);
    });
  }
  verPeliculas(actor: IActor) {
    if (actor.id) {
      this.firestore.getActoresPeliculas(actor.id).subscribe((peliculaid) => {
        const peliculaRefArray = peliculaid.map((item) => item.peliculaRef);
        this.firestore.getPeliculas().subscribe((peliculas) => {
          this.actorPelicula = peliculas.filter((pelicula) => {
            if (pelicula.id !== undefined) {
              return peliculaRefArray.includes(pelicula.id);
            }
            return false;
          });
         
        });
      });
    }
  }
  verPais(actor: IActor) {
    this.bandera.pais(actor.pais).subscribe((data) => {
      const { name, region, flags, languages } = data[0];
      this.actorPais = {
        usuario: actor.usuario,
        nombrePais: name.common,
        flag: flags.png,
        region: region,
        languages: languages.spa,
      };
    });
  }
  verMas(actor: IActor) {
    this.actorDetalles = actor;
  }
  
}
