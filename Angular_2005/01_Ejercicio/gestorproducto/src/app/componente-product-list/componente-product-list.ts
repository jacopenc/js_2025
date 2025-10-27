import { Component } from '@angular/core';
import { Producto } from '../models/producto.model';
import { Categoria } from '../models/categoria.model';
import { ComponenteCategoriaDetail } from '../componente-categoria-detail/componente-categoria-detail'

@Component({
  selector: 'app-componente-product-list',
  imports: [ComponenteCategoriaDetail],
  templateUrl: './componente-product-list.html',
  styleUrl: './componente-product-list.css',
})
export class ComponenteProductList {
 productos: Producto[] = [];
  selected?: Producto;

  constructor() {
    const cat1: Categoria = { id: 1, nombre: 'Tecnología', descripcion: 'Productos electrónicos y gadgets' };
    const cat2: Categoria = { id: 2, nombre: 'Hogar', descripcion: 'Artículos para el hogar' };

    this.productos = [
      { id: 1, nombre: 'Laptop', precio: 1200, categoria: cat1 },
      { id: 2, nombre: 'Aspiradora', precio: 250, categoria: cat2 },
      { id: 3, nombre: 'Smartphone', precio: 900, categoria: cat1 }
    ];
  }

  seleccionar(producto: Producto) {
    this.selected = producto;
  }
}
