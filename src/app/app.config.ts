import { provideHttpClient, withFetch } from '@angular/common/http';
import { type ApplicationConfig, isDevMode, provideExperimentalZonelessChangeDetection } from '@angular/core';
import { provideClientHydration, withEventReplay } from '@angular/platform-browser';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { provideRouter, withComponentInputBinding, withRouterConfig } from '@angular/router';
import { provideEffects } from '@ngrx/effects';
import { provideRouterStore, routerReducer } from '@ngrx/router-store';
import { provideState, provideStore } from '@ngrx/store';
import { provideStoreDevtools } from '@ngrx/store-devtools';
import { productEffects } from '@app/states/product/product.effects';
import { productFeature } from '@app/states/product/product.feature';
import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideExperimentalZonelessChangeDetection(),
    provideClientHydration(withEventReplay()),
    provideRouter(
      routes,
      withComponentInputBinding(),
      withRouterConfig({
        onSameUrlNavigation: 'ignore',
      }),
    ),
    provideAnimationsAsync(),
    provideHttpClient(
      withFetch(),
    ),
    provideStore({ router: routerReducer }),
    provideRouterStore(),
    provideStoreDevtools({
      maxAge: 25,
      logOnly: !isDevMode(),
    }),
    provideEffects([productEffects]),
    provideState(productFeature),
  ],
};
