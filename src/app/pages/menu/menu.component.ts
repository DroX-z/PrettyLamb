import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent {

  selected = 'bebidas';

products = [
  // BEBIDAS
  {
    category: 'bebidas',
    name: 'Blue Butterfly Chai',
    price: '$65',
    img: 'assets/blue butterfly chai menu.webp',
    description: 'Una mezcla única de chai especiado con flores butterfly pea que cambia de color y ofrece un sabor dulce, aromático y memorable.'
  },
  {
    category: 'bebidas',
    name: 'Iced Latte',
    price: '$60',
    img: 'assets/latte menu.webp',
    description: 'Café espresso de alta calidad mezclado con leche fría para un latte suave, refrescante y perfectamente equilibrado.'
  },
  {
    category: 'bebidas',
    name: 'Matcha',
    price: '$60',
    img: 'assets/matcha menu.webp',
    description: 'Matcha japonés premium batido al momento para lograr una textura sedosa y un sabor herbal profundo y energizante.'
  },
  {
    category: 'bebidas',
    name: 'Coconut Matcha',
    price: '$60',
    img: 'assets/coconut menu.webp',
    description: 'Matcha de grado premium mezclado con leche de coco, creando una bebida cremosa, ligera y con un toque tropical irresistible.'
  },
  {
    category: 'bebidas',
    name: 'Bugambilia Spritz',
    price: '$60',
    img: 'assets/bugambilia menu.webp',
    description: 'Spritz refrescante elaborado con esencia natural de bugambilia, notas florales y un acabado ligeramente cítrico.'
  },
  {
    category: 'bebidas',
    name: 'Hot Latte',
    price: '$60',
    img: 'assets/hot latte menu.webp',
    description: 'Espresso intenso combinado con leche vaporizada para crear un latte cremoso, cálido y reconfortante.'
  },

  // BAGELS
  {
    category: 'bagels',
    name: 'Bagel Clásico',
    price: '$55',
    img: 'assets/apple baguel menu.webp',
    description: 'Bagel tostado con exterior crujiente e interior suave; perfecto para acompañar cualquier bebida.'
  },
  {
    category: 'bagels',
    name: 'Bagel Salmón',
    price: '$95',
    img: 'assets/egg baguel menu.webp',
    description: 'Salmón ahumado premium servido sobre bagel tostado con queso crema y toques de limón y eneldo.'
  },
  {
    category: 'bagels',
    name: 'Fig and Honey',
    price: '$55',
    img: 'assets/fig and honey menu.webp',
    description: 'Deliciosa combinación de higos frescos, queso crema y miel artesanal sobre bagel tostado.'
  },
  {
    category: 'bagels',
    name: 'Salmón',
    price: '$95',
    img: 'assets/salmon baguel menu.webp',
    description: 'Salmón ahumado de calidad premium con mezcla cremosa y un suave toque cítrico, servido en bagel recién tostado.'
  },
  {
    category: 'bagels',
    name: 'Spicy Iberian',
    price: '$95',
    img: 'assets/spicy iberian baguel menu.webp',
    description: 'Jamón ibérico acompañado de salsa ligeramente picante que realza su sabor, todo en un bagel dorado y crujiente.'
  },

  // FLORES
  {
    category: 'flowers',
    name: 'Romantic Bloom',
    price: '$150',
    img: 'assets/romantic bloom menu.webp',
    description: 'Arreglo delicado en tonos rosados con flores seleccionadas para transmitir romance, elegancia y calidez.'
  },
  {
    category: 'flowers',
    name: 'Velvet Greens',
    price: '$350',
    img: 'assets/velvet greens menu.webp',
    description: 'Arreglo sofisticado con verdes aterciopelados, ideal para dar un toque natural, fresco y moderno a cualquier espacio.'
  },
  {
    category: 'flowers',
    name: 'Las Cristinas',
    price: '$150',
    img: 'assets/las cristinas menu.webp',
    description: 'Combinación vibrante de flores de temporada con colores alegres que iluminan cualquier ambiente.'
  },
  {
    category: 'flowers',
    name: 'Daisy Delight',
    price: '$350',
    img: 'assets/daisy menu.webp',
    description: 'Ramo lleno de margaritas frescas que transmiten pureza, luz y alegría en cada detalle.'
  },
  {
    category: 'flowers',
    name: 'Sunshine',
    price: '$350',
    img: 'assets/sunshine menu.webp',
    description: 'Arreglo radiante en tonos amarillos brillantes que aporta energía, vida y una sensación de frescura inmediata.'
  }
];


  get filteredProducts() {
    return this.products.filter(p => p.category === this.selected);
  }

  selectCategory(cat: string) {
    this.selected = cat;
  }


  modalOpen = false;
selectedProduct: any = null;
isMobile = false;

constructor() {
  this.checkScreen();
  window.addEventListener('resize', () => this.checkScreen());
}

checkScreen() {
  this.isMobile = window.innerWidth <= 768;
}

selectProduct(product: any) {
  this.selectedProduct = product;
  this.modalOpen = true;
}

closeModal() {
  this.modalOpen = false;
  setTimeout(() => {
    this.selectedProduct = null; // limpia después de la animación
  }, 300); // 300ms coincide con la duración de la transición
}

addToCart(product: any) {
  console.log('Agregar al carrito:', product);
  this.closeModal();
}

}
