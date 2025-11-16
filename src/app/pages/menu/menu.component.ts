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
    { category: 'bebidas', name: 'Blue Butterfly Chai', price: '$65', img: 'assets/blue butterfly chai menu.png' },
    { category: 'bebidas', name: 'Iced Latte', price: '$60', img: 'assets/latte menu.png' },
    { category: 'bebidas', name: 'Matcha', price: '$60', img: 'assets/matcha menu.png' },
    { category: 'bebidas', name: 'Coconut Matcha', price: '$60', img: 'assets/coconut menu.png' },
    { category: 'bebidas', name: 'Bugambilia Spritz', price: '$60', img: 'assets/bugambilia menu.png' },
    { category: 'bebidas', name: 'Hot Latte', price: '$60', img: 'assets/hot latte menu.png' },

    { category: 'bagels', name: 'Bagel Clásico', price: '$55', img: 'assets/apple baguel menu.png' },
    { category: 'bagels', name: 'Bagel Salmón', price: '$95', img: 'assets/egg baguel menu.png' },
    { category: 'bagels', name: 'Fig and Honey', price: '$55', img: 'assets/fig and honey menu.png' },
    { category: 'bagels', name: 'Salmón', price: '$95', img: 'assets/salmon baguel menu.png' },
    { category: 'bagels', name: 'Spicy Iberian', price: '$95', img: 'assets/spicy iberian baguel menu.png' },

    { category: 'flowers', name: 'Romantic Bloom', price: '$150', img: 'assets/romantic bloom menu.png' },
    { category: 'flowers', name: 'Velvet Greens', price: '$350', img: 'assets/velvet greens menu.png' },
    { category: 'flowers', name: 'Las Cristinas', price: '$150', img: 'assets/las cristinas menu.png' },
    { category: 'flowers', name: 'Daisy Delight', price: '$350', img: 'assets/daisy menu.png' }
  ];

  get filteredProducts() {
    return this.products.filter(p => p.category === this.selected);
  }

  selectCategory(cat: string) {
    this.selected = cat;
  }
}
