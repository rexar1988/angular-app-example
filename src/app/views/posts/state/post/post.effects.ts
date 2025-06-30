import type { HttpErrorResponse } from '@angular/common/http';
import { inject } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
import { PostService } from '@app/views/posts/services/post/post.service';
import { postActions } from './post.actions';

const loadPosts = createEffect(
  (actions$ = inject(Actions), service = inject(PostService)) => {
    return actions$.pipe(
      ofType(postActions.postsGroup.loadPosts),
      switchMap(() => service.getPosts().pipe(
        map(response => postActions.postsGroup.loadPostsSuccess({ response })),
        catchError((error: HttpErrorResponse) => of(postActions.postsGroup.loadPostsFailure(error))),
      )),
    );
  },
  { functional: true },
);

const loadPost = createEffect(
  (actions$ = inject(Actions), service = inject(PostService)) => {
    return actions$.pipe(
      ofType(postActions.postGroup.loadPost),
      switchMap(payload => service.getPost(payload.postId).pipe(
        map(response => postActions.postGroup.loadPostSuccess({ response })),
        catchError((error: HttpErrorResponse) => of(postActions.postGroup.loadPostFailure(error))),
      )),
    );
  },
  { functional: true },
);

export const postEffects = {
  loadPosts,
  loadPost,
};
