import type { HttpErrorResponse } from '@angular/common/http';
import { createActionGroup, emptyProps, props } from '@ngrx/store';
import type { Post } from '@app/shared/interfaces/post.interface';

const postsGroup = createActionGroup({
  source: 'Post',
  events: {
    'Load Posts': emptyProps(),
    'Load Posts Success': props<{ response: Post[] }>(),
    'Load Posts Failure': props<{ error: HttpErrorResponse }>(),
  },
});

const postGroup = createActionGroup({
  source: 'Post',
  events: {
    'Load Post': props<{ postId: number }>(),
    'Load Post Success': props<{ response: Post }>(),
    'Load Post Failure': props<{ error: HttpErrorResponse }>(),
  },
});

export const postActions = {
  postsGroup,
  postGroup,
};
