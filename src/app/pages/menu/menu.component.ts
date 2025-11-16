import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent {

  selected = 'bebidas';

  products = [
    // Ejemplo, aquí pones tus productos reales
    { category: 'bebidas', name: 'Blue Butterfly Chai', price: '$65', img: 'assets/blue butterfly chai menu.webp' },
    { category: 'bebidas', name: 'Iced Latte', price: '$60', img: 'assets/latte menu.webp' },
    { category: 'bebidas', name: 'Matcha', price: '$60', img: 'assets/matcha menu.webp' },
    { category: 'bebidas', name: 'Coconut Matcha', price: '$60', img: 'assets/coconut menu.webp' },
    { category: 'bebidas', name: 'Bugambilia Spritz', price: '$60', img: 'assets/bugambilia menu.webp' },
    { category: 'bebidas', name: 'Hot Latte', price: '$60', img: 'assets/hot latte menu.webp' },

    { category: 'bagels', name: 'Bagel Clásico', price: '$55', img: 'assets/apple baguel menu.webp' },
    { category: 'bagels', name: 'Bagel Salmón', price: '$95', img: 'assets/egg baguel menu.webp' },
    { category: 'bagels', name: 'Fig and Honey', price: '$55', img: 'assets/fig and honey menu.webp' },
    { category: 'bagels', name: 'Salmón', price: '$95', img: 'assets/salmon baguel menu.webp' },
    { category: 'bagels', name: 'Spicy Iberian', price: '$95', img: 'assets/spicy iberian baguel menu.webp' },

    { category: 'flowers', name: 'Romantic Bloom', price: '$150', img: 'assets/romantic bloom menu.webp' },
    { category: 'flowers', name: 'Velvet Greens', price: '$350', img: 'assets/velvet greens menu.webp' },
    { category: 'flowers', name: 'Las Cristinas', price: '$150', img: 'assets/las cristinas menu.webp' },
    { category: 'flowers', name: 'Daisy Delight', price: '$350', img: 'assets/daisy menu.webp' },
    { category: 'flowers', name: 'Sunshine', price: '$350', img: 'assets/sunshine menu.webp' }
  ];

  get filteredProducts() {
    return this.products.filter(p => p.category === this.selected);
  }

  selectCategory(cat: string) {
    this.selected = cat;
  }
}
