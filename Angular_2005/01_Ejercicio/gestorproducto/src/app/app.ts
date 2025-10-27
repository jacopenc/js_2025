import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ComponenteProductList } from './componente-product-list/componente-product-list';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,ComponenteProductList],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('gestorproducto');
}
