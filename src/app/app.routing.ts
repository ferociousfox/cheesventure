import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {  StartComponent } from './start/start.component';
import { TavernComponent } from './tavern/tavern.component';



const APP_ROUTES: Routes = [
  {
    path: '',
    component: StartComponent
  },
  {
    path: 'tavern',
    component: TavernComponent
  }
 ];


export const ROUTING: ModuleWithProviders = RouterModule.forRoot(APP_ROUTES);
