import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  NbThemeModule,
  NbToastrModule,
  NbToastrConfig,
  NbGlobalLogicalPosition,
  NbLayoutModule,
} from '@nebular/theme';
import { StoreModule } from '@ngrx/store';
import { HttpClientModule } from '@angular/common/http';
import { CoreModule } from './core/core.module';
import { DashboardModule } from './dashboard';
import { NbMenuModule, NbSidebarModule } from '@nebular/theme';
import { AuthModule } from './auth';

const config: Partial<NbToastrConfig> | undefined = {
  hasIcon: false,
  destroyByClick: true,
  duration: 1500,
  preventDuplicates: true,
  limit: 3,
  position: NbGlobalLogicalPosition.TOP_END,
  icon: {
    icon: '',
  },
};

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DashboardModule,
    AuthModule,
    BrowserAnimationsModule,
    NbLayoutModule,
    NbThemeModule.forRoot({ name: 'note' }),
    StoreModule.forRoot({}, {}),
    HttpClientModule,
    NbToastrModule.forRoot(config),
    CoreModule,
    NbMenuModule.forRoot(),
    NbSidebarModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
