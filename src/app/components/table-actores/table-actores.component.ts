import { Component, Input, Output, EventEmitter } from '@angular/core';
import IActor from 'src/app/interfaces/actor';
@Component({
  selector: 'app-table-actores',
  templateUrl: './table-actores.component.html',
  styleUrls: ['./table-actores.component.scss']
})
export class TableActoresComponent {
  @Input() actores!: IActor[];
  @Output() verPeliculasClick = new EventEmitter<IActor>();
  @Output() verPaisClick = new EventEmitter<IActor>();
  @Output() verMasClick = new EventEmitter<IActor>();
  verPeliculas(actor: IActor) {
    this.verPeliculasClick.emit(actor);
  }

  verPais(actor: IActor) {
    this.verPaisClick.emit(actor);
  }

  verMas(actor: IActor) {
    this.verMasClick.emit(actor);
  }
}
