import { createReducer, on } from '@ngrx/store';
import type { Product } from '@app/interfaces/product/product.interface';
import { productActions } from '@app/states/product/product.actions';
import type { Nullable } from '@app/types/nullable.type';

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
