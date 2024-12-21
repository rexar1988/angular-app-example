import type { HttpErrorResponse } from '@angular/common/http';
import { createActionGroup, props } from '@ngrx/store';
import type { Product } from '@app/interfaces/product/product.interface';

const productGroup = createActionGroup({
  source: 'Product',
  events: {
    'Load Product': props<{ productId: number }>(),
    'Load Product Success': props<{ response: Product }>(),
    'Load Product Failure': props<{ error: HttpErrorResponse }>(),
  },
});

export const productActions = { productGroup };
