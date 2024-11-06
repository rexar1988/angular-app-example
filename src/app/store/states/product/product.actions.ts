import type { HttpErrorResponse } from '@angular/common/http';
import type { Product } from '@helix/shared/interfaces';
import { createActionGroup, props } from '@ngrx/store';

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
