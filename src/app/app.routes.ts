import { Routes } from '@angular/router';
import { MainLayoutView } from '$components/layouts/main-layout/main-layout.view';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: MainLayoutView,
    children: [
      {
        path: '',
        loadComponent: () => import('$views/main/main.view').then(component => component.MainView),
      },
    ],
  },
];
