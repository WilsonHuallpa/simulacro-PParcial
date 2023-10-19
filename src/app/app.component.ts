import { Component } from '@angular/core';
import { Item } from './components/layout/layout.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  items: Item[] = [
    {
      title: 'Actor',
      link: '/',
      active: true,
      children: [
        {
          title: 'Alta De Actor',
          link: '/actor/altadePelicula',
          active: true,
        },
        {
          title: 'Actor y Pelicula',
          link: '/actor/actorpelicula',
          active: false,
        },
      ],
    },
    {
      title: 'Pelicula',
      link: '/pelicula',
      active: false
    },
    {
      title: 'Login',
      link: '/auth',
      active: false
    },
    {
      title: 'Errors',
      link: '/errors',
      active: false
    },
  ]
}
