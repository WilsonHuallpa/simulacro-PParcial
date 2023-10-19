import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableActoresComponent } from './table-actores.component';

describe('TableActoresComponent', () => {
  let component: TableActoresComponent;
  let fixture: ComponentFixture<TableActoresComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TableActoresComponent]
    });
    fixture = TestBed.createComponent(TableActoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
