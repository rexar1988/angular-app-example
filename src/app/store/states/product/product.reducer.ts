import { createReducer, on } from '@ngrx/store';
import { Product } from '$domain/interfaces';
import { Nullable } from '$domain/types';
import { productActions } from '$store/states/product/product.actions';

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
