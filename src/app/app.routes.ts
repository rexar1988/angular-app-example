import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'product',
    loadComponent: () => import('./views/product/product.view').then(component => component.ProductView),
  },
];
