import type { HttpErrorResponse } from '@angular/common/http';
import { inject } from '@angular/core';
import { ProductService } from '@helix/services/product/product.service';
import { productActions } from '@helix/store/states/product/product.actions';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, switchMap, throwError } from 'rxjs';

const loadProduct = createEffect(
  (actions$ = inject(Actions), service = inject(ProductService)) => actions$.pipe(
    ofType(productActions.productGroup.loadProduct),
    switchMap(payload => service.getProduct(payload.productId).pipe(
      map(response => productActions.productGroup.loadProductSuccess({ response })),
      catchError((error: HttpErrorResponse) => throwError(
        () => productActions.productGroup.loadProductFailure(error),
      )),
    )),
  ),
  { functional: true },
);

export const productEffects = {
  loadProduct,
};
