import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthService, SharedService } from './services';
import { httpInterceptorProviders } from './utils/http.interceptor';

@NgModule({
  declarations: [],
  providers: [SharedService, AuthService, httpInterceptorProviders],
  imports: [CommonModule],
})
export class CoreModule {
  constructor(@Optional() @SkipSelf() core: CoreModule) {
    if (core) {
      throw new Error('You should import core module only in the root module');
    }
  }
}
