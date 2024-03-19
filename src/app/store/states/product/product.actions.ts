import { HttpErrorResponse } from '@angular/common/http';
import { createActionGroup, props } from '@ngrx/store';
import { Product } from '$domain/interfaces';

const productGroup = createActionGroup({
  source: 'Product',
  events: {
    'Load Product': props<{ productId: number }>(),
    'Load Product Success': props<{ response: Product }>(),
    'Load Product Failure': props<{ error: HttpErrorResponse }>(),
  },
});

export const productActions = {
  productGroup,
};
