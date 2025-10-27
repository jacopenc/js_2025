import { Categoria } from './categoria.model';

export interface Producto {
  id: number;
  nombre: string;
  precio: number;
  categoria: Categoria;
}
