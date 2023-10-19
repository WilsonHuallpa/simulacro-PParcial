import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardPaisActorComponent } from './card-pais-actor.component';

describe('CardPaisActorComponent', () => {
  let component: CardPaisActorComponent;
  let fixture: ComponentFixture<CardPaisActorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CardPaisActorComponent]
    });
    fixture = TestBed.createComponent(CardPaisActorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
