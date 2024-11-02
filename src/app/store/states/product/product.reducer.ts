import type { Product } from '@helix/shared/interfaces/product/product.interface';
import type { Nullable } from '@helix/shared/types';
import { productActions } from '@helix/store/states/product/product.actions';
import { createReducer, on } from '@ngrx/store';

const initialState = {
  product: null as Nullable<Product>,
};

export type ProductState = typeof initialState;

export const productReducer = createReducer(
  initialState,
  on(productActions.productGroup.loadProductSuccess, (state, action): ProductState => ({
    ...state,
    product: action.response,
  })),
);
