import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'showcase-product-details',
  imports: [],
  templateUrl: './product-details.view.html',
  styleUrl: './product-details.view.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductDetailsView {

}
