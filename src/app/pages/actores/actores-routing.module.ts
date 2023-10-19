import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AltaActoresComponent } from './alta-actores/alta-actores.component';
import { ActorPeliculaComponent } from './actor-pelicula/actor-pelicula.component';

const routes: Routes = [
  {
    path:'',
    redirectTo: 'altadePelicula', 
    pathMatch: 'full'
  },
  {
    path:'altadePelicula',
    component: AltaActoresComponent,
  },
  {
    path:'actorpelicula',
    component: ActorPeliculaComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ActoresRoutingModule { }
