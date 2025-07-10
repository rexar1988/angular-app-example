import { ChangeDetectionStrategy, Component } from '@angular/core';
import { HeaderComponent } from '@app/components/header/header.component';

const asdasd = HeaderComponent

@Component({
  selector: 'showcase-products',
  templateUrl: './products.view.html',
  styleUrl: './products.view.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductsView {}
