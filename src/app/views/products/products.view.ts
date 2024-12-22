import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'showcase-products',
  templateUrl: './products.view.html',
  styleUrl: './products.view.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductsView {}
