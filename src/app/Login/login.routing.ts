import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { LoginComponent } from './Login.component';
const routes: Routes = [
  { path: '', component: LoginComponent }
];

export const route_Login: ModuleWithProviders = RouterModule.forChild(routes);
