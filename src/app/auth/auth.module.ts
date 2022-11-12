import { NgModule } from '@angular/core';

import { AuthRoutingModule } from './auth-routing.module';
import { AuthComponent, LoginComponent, SignupComponent } from './pages';
import { SharedModule } from '../shared';
import { NbThemeModule } from '@nebular/theme';

@NgModule({
  declarations: [AuthComponent, LoginComponent, SignupComponent],
  imports: [AuthRoutingModule, SharedModule],
})
export class AuthModule {}
