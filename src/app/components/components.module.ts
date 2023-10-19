import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout/layout.component';
import { RouterModule } from '@angular/router';
import { TablapaisesComponent } from './tablapaises/tablapaises.component';
import { TablaActorComponent } from './tabla-actor/tabla-actor.component';
import { CardActorComponent } from './card-actor/card-actor.component';
import { CardPaisActorComponent } from './card-pais-actor/card-pais-actor.component';
import { AcordeonPeliculaComponent } from './acordeon-pelicula/acordeon-pelicula.component';
import { TableActoresComponent } from './table-actores/table-actores.component';



@NgModule({
  declarations: [
    LayoutComponent,
    TablapaisesComponent,
    TablaActorComponent,
    CardActorComponent,
    CardPaisActorComponent,
    AcordeonPeliculaComponent,
    TableActoresComponent
  ],
  exports: [
    LayoutComponent,
    TablapaisesComponent,
    TablaActorComponent,
    CardActorComponent,
    CardPaisActorComponent,
    AcordeonPeliculaComponent,
    TableActoresComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class ComponentsModule { }
