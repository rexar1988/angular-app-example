import type { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'posts',
    loadChildren: () => import('@app/views/posts/posts.routes'),
  },
  {
    path: '',
    loadChildren: () => import('@app/views/products/products.routes'),
  },
];
