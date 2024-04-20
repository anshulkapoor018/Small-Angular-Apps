import { Component, OnInit } from '@angular/core';
import { PokemonService } from '../pokemon.service';

@Component({
  selector: 'app-pokemon-list-search',
  templateUrl: './pokemon-list-search.component.html',
  styleUrls: ['./pokemon-list-search.component.css']
})
export class PokemonListSearchComponent implements OnInit {
  pokemonList = [];
  offset = 0;

  constructor(private pokemonService: PokemonService) {}

  ngOnInit() {
    this.loadMore();
  }

  loadMore(): void {
    this.pokemonService.getPokemonList(this.offset).subscribe({
      next: (data) => {
        this.pokemonList = [...this.pokemonList, ...data.results];
        this.offset += 20;
      },
      error: (error) => {
        console.error("There was a problem with the fetch operation:", error);
      }
    });
  }

  getPokemonImage(idx: number): string {
    return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${idx + 1 + this.offset}.png`;
  }
}
