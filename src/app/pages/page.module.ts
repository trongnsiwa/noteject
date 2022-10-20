import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CalendarComponent } from './calendar/calendar.component';
import {
  NbLayoutModule,
  NbSidebarModule,
  NbIconModule,
  NbButtonModule,
} from '@nebular/theme';
import { ComponentsModule } from '../components/components.module';

@NgModule({
  declarations: [CalendarComponent],
  imports: [
    CommonModule,
    NbLayoutModule,
    NbSidebarModule,
    NbIconModule,
    ComponentsModule,
    NbButtonModule,
  ],
  exports: [CalendarComponent],
})
export class PageModule {}
