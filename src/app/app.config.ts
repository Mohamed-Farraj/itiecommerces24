
import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter, withInMemoryScrolling, withViewTransitions } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { provideAnimations } from '@angular/platform-browser/animations';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes,withViewTransitions(),withInMemoryScrolling({scrollPositionRestoration:"top"})), provideClientHydration(),provideHttpClient(withFetch()),provideAnimations(),importProvidersFrom(SweetAlert2Module.forRoot())]
};
