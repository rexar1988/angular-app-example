import type { Route } from '@angular/router';
import { provideEffects } from '@ngrx/effects';
import { provideState } from '@ngrx/store';
import { PostService } from '@app/views/posts/services/post/post.service';
import { postEffects, postFeature } from '@app/views/posts/state/post';

export default [
  {
    path: '',
    loadComponent: () => import('./posts.view').then(component => component.PostsView),
    children: [
      {
        path: ':postId',
        loadComponent: () => import('./views/details/details.view').then(component => component.DetailsView),
      },
      {
        path: '',
        loadComponent: () => import('./views/list/list.view').then(component => component.ListView),
      },
    ],
    providers: [
      PostService,
      provideState(postFeature),
      provideEffects([postEffects]),
    ],
  },
] as Route[];
