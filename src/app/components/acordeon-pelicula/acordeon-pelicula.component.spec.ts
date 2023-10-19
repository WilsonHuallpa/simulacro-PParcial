import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcordeonPeliculaComponent } from './acordeon-pelicula.component';

describe('AcordeonPeliculaComponent', () => {
  let component: AcordeonPeliculaComponent;
  let fixture: ComponentFixture<AcordeonPeliculaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AcordeonPeliculaComponent]
    });
    fixture = TestBed.createComponent(AcordeonPeliculaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
