import { createFeature } from '@ngrx/store';
import { productReducer } from './product.reducer';

export const productFeature = createFeature({
  name: 'product',
  reducer: productReducer,
});
