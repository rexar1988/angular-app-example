import type { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    loadComponent: () => import('@helix/views/main/main.view').then(component => component.MainView),
  },
];
