import { HttpErrorResponse } from '@angular/common/http';
import { inject } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, switchMap, throwError } from 'rxjs';
import { ProductService } from '$services/product/product.service';
import { productActions } from '$store/states/product/product.actions';

const loadProduct = createEffect(
  (actions$ = inject(Actions), service = inject(ProductService)) => {
    return actions$.pipe(
      ofType(productActions.productGroup.loadProduct),
      switchMap(payload => service.getProduct(payload.productId).pipe(
        map(response => productActions.productGroup.loadProductSuccess({ response })),
        catchError((error: HttpErrorResponse) => throwError(
          () => productActions.productGroup.loadProductFailure(error),
        )),
      )),
    );
  },
  { functional: true },
);

export const productEffects = {
  loadProduct,
};
