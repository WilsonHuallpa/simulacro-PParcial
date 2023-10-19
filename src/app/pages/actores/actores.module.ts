import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ActoresRoutingModule } from './actores-routing.module';
import { AltaActoresComponent } from './alta-actores/alta-actores.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ComponentsModule } from 'src/app/components/components.module';
import { ActorPeliculaComponent } from './actor-pelicula/actor-pelicula.component';


@NgModule({
  declarations: [
    AltaActoresComponent,
    ActorPeliculaComponent
  ],
  imports: [
    CommonModule,
    ActoresRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    ComponentsModule
  ]
})
export class ActoresModule { }
