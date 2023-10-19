import { Component, Input } from '@angular/core';
import { ActorPais } from 'src/app/pages/actores/actor-pelicula/actor-pelicula.component';
@Component({
  selector: 'app-card-pais-actor',
  templateUrl: './card-pais-actor.component.html',
  styleUrls: ['./card-pais-actor.component.scss']
})
export class CardPaisActorComponent {
  @Input() actorPais!: ActorPais;
}
