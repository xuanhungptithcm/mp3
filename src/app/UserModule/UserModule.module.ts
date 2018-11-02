import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserModuleComponent } from './UserModule.component';
import { routeUser } from './user.route.routing';
import { UserService } from './user.service';

@NgModule({
  imports: [
    CommonModule,
    routeUser
  ],
  providers: [UserService],
  declarations: [UserModuleComponent]
})
export class UserModule { }
