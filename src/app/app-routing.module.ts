import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'actor', 
    pathMatch: 'full'
  },
  {
    path: 'actor',
    loadChildren: () => import('./pages/actores/actores.module').then(m => m.ActoresModule)
  },
  {
    path: 'pelicula',
    loadChildren: () => import('./pages/peliculas/peliculas.module').then(m => m.PeliculasModule)
  },
  {
    path: 'errors',
    loadChildren: () => import('./pages/errors/errors.module').then(m => m.ErrorsModule)
  },
  {
    path: 'auth',
    loadChildren: () => import('./pages/auth/auth.module').then(m => m.AuthModule)
  },
  {
    path: '**',
    redirectTo: 'errors'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
