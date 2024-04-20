import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokemonListSearchComponent } from './pokemon-list-search.component';

describe('PokemonListSearchComponent', () => {
  let component: PokemonListSearchComponent;
  let fixture: ComponentFixture<PokemonListSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PokemonListSearchComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PokemonListSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
