import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  NbThemeModule,
  NbLayoutModule,
  NbButtonModule,
  NbSidebarModule,
  NbToastrModule,
  NbToastrConfig,
  NbGlobalLogicalPosition,
} from '@nebular/theme';
import { NbEvaIconsModule } from '@nebular/eva-icons';
import { StoreModule } from '@ngrx/store';
import { GraphQLModule } from './graphql.module';
import { HttpClientModule } from '@angular/common/http';
import { ComponentsModule } from './components/components.module';
import { PageModule } from './pages/page.module';
import { NbMenuModule } from '@nebular/theme';
import { DragDropModule } from '@angular/cdk/drag-drop';

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
    BrowserAnimationsModule,
    NbThemeModule.forRoot({ name: 'note' }),
    NbLayoutModule,
    NbButtonModule,
    NbEvaIconsModule,
    NbMenuModule.forRoot(),
    NbSidebarModule.forRoot(),
    StoreModule.forRoot({}, {}),
    GraphQLModule,
    HttpClientModule,
    ComponentsModule,
    PageModule,
    DragDropModule,
    NbToastrModule.forRoot(config),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
