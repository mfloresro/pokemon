import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BuscarPokemonComponent } from './buscar-pokemon.component';

describe('BuscarPokemonComponent', () => {
  let component: BuscarPokemonComponent;
  let fixture: ComponentFixture<BuscarPokemonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BuscarPokemonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BuscarPokemonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
