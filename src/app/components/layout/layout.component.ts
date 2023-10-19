import { Component,Input } from '@angular/core';
export type Item = {
  title: string;
  link: string;
  active: boolean;
  children?: Item[];
}
@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent {
  @Input() items: Item[] = [];
}
