import type { Route } from '@angular/router';

export default [
  {
    path: '',
    loadComponent: () => import('./products.view').then(component => component.ProductsView),
  },
] as Route[];
