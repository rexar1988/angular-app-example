import { createReducer, on } from '@ngrx/store';
import type { Post } from '@app/shared/interfaces/post.interface';
import type { Nullable } from '@app/shared/types/nullable.type';
import { postActions } from './post.actions';

const initialState = {
  posts: null as Nullable<Post[]>,
  post: null as Nullable<Post>,
};

export type PostState = typeof initialState;

export const postReducer = createReducer(
  initialState,
  on(postActions.postsGroup.loadPostsSuccess, (state, action): PostState => ({
    ...state,
    posts: action.response,
  })),
  on(postActions.postGroup.loadPostSuccess, (state, action): PostState => ({
    ...state,
    post: action.response,
  })),
);
