import { Component, Input } from '@angular/core';
import IPelicula from 'src/app/interfaces/pelicula'; 
@Component({
  selector: 'app-acordeon-pelicula',
  templateUrl: './acordeon-pelicula.component.html',
  styleUrls: ['./acordeon-pelicula.component.scss']
})
export class AcordeonPeliculaComponent {

  @Input() actorPelicula!: IPelicula[];
  openedIndex = -1; // Inicialmente ninguna sección abierta
  toggleAccordion(index: number) {
    if (this.openedIndex === index) {
      this.openedIndex = -1; // Cierra la sección si ya está abierta
    } else {
      this.openedIndex = index; // Abre la sección con el índice especificado
    }
  }
}
