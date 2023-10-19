import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout/layout.component';
import { RouterModule } from '@angular/router';
import { TablapaisesComponent } from './tablapaises/tablapaises.component';
import { TablaActorComponent } from './tabla-actor/tabla-actor.component';



@NgModule({
  declarations: [
    LayoutComponent,
    TablapaisesComponent,
    TablaActorComponent
  ],
  exports: [
    LayoutComponent,
    TablapaisesComponent,
    TablaActorComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class ComponentsModule { }
