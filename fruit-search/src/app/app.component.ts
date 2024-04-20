import { Component } from '@angular/core';
import { Product } from './product.model';
import { FRUITS } from './fruits';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  searchTerm = '';
  filteredProducts: Product[] = FRUITS;
  isChecked = false;

  handleChange(event: Event): void {
    const target = event.target as HTMLInputElement;
    this.searchTerm = target.value.toLowerCase().trim();
    this.filterProducts();
  }

  handleCheckboxChange(event: Event): void {
    const target = event.target as HTMLInputElement;
    this.isChecked = target.checked;
    this.filterProducts();
  }

  filterProducts(): void {
    let results = FRUITS;
    if (this.searchTerm) {
      results = results.filter(item =>
        item.name.toLowerCase().startsWith(this.searchTerm)
      );
    }
    if (this.isChecked) {
      results = results.filter(item => item.stocked);
    }
    this.filteredProducts = results;
  }

  get fruits(): Product[] {
    return this.filteredProducts.filter(item => item.category === "Fruits");
  }

  get vegetables(): Product[] {
    return this.filteredProducts.filter(item => item.category === "Vegetables");
  }
}
