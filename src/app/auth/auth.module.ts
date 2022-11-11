import { NgModule } from '@angular/core';

import { AuthRoutingModule } from './auth-routing.module';
import { AuthComponent, LoginComponent, SignupComponent } from './pages';
import { SharedModule } from '../shared';

@NgModule({
  declarations: [AuthComponent, LoginComponent, SignupComponent],
  imports: [AuthRoutingModule, SharedModule],
})
export class AuthModule {}
