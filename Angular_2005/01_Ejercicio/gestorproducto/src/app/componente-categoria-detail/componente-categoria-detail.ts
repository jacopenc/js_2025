import { Component,Input  } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Categoria } from '../models/categoria.model';

@Component({
  selector: 'app-componente-categoria-detail',
  imports: [CommonModule],
  templateUrl: './componente-categoria-detail.html',
  styleUrl: './componente-categoria-detail.css',
})
export class ComponenteCategoriaDetail {
  @Input() categoria!: Categoria;

}
