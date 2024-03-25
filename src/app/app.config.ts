import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideClientHydration } from '@angular/platform-browser';

import { AppRoutes } from './app.routing.module';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(AppRoutes), provideClientHydration()]
};
