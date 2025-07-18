import { createFeature } from '@ngrx/store';
import { State } from '@app/shared/enums/state.enum';
import { postReducer } from './post.reducer';

export const postFeature = createFeature({
  name: State.POST,
  reducer: postReducer,
});
