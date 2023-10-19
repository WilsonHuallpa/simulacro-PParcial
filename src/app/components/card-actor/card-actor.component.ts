import { Component, Input } from '@angular/core';
import IActor from 'src/app/interfaces/actor'; 
@Component({
  selector: 'app-card-actor',
  templateUrl: './card-actor.component.html',
  styleUrls: ['./card-actor.component.scss']
})
export class CardActorComponent {

  @Input() actorDetalles!: IActor;
}
