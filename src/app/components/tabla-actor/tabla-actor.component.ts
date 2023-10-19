import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Observable } from 'rxjs';
import { BanderasService } from 'src/app/services/banderas.service';
import { FirestoreService } from 'src/app/services/firestore.service';
import IActor from 'src/app/interfaces/actor';
@Component({
  selector: 'app-tabla-actor',
  templateUrl: './tabla-actor.component.html',
  styleUrls: ['./tabla-actor.component.scss']
})
export class TablaActorComponent implements OnInit{
  botonSeleccionado: string | null = null;
  misBanderas: any[] | undefined;
  misPaises: Observable<any> | undefined;
  bandera: string = '';
  currentPage: number = 1;
  itemsPerPage: number = 10;
  selectedObjeto: any = null;
 
  actores: IActor[] = [];
  @Input() pais: any;

  @Output() seleccionar = new EventEmitter<IActor>();

  constructor(private firestore: FirestoreService){

  }
  ngOnInit(): void {
    this.firestore.getActores().subscribe((resp) => {
      this.actores = resp;
    });
  }

  selectCountry(actor: IActor) {
    this.seleccionar.emit(actor);
    this.selectedObjeto = actor.nombre;
  }

  isSelected(actor: IActor) {
    return this.selectedObjeto === actor.nombre;
  }
}
