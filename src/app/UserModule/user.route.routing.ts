import { Routes, RouterModule } from '@angular/router';
import { UserModuleComponent } from './UserModule.component';
import { ModuleWithProviders } from '@angular/core';
const routes: Routes = [
  { path: '', component: UserModuleComponent }
];

export const routeUser: ModuleWithProviders = RouterModule.forChild(routes);
