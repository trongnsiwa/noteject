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
import { DragDropModule } from '@angular/cdk/drag-drop';

@NgModule({
  declarations: [CalendarComponent],
  imports: [
    CommonModule,
    NbLayoutModule,
    NbSidebarModule,
    NbIconModule,
    ComponentsModule,
    NbButtonModule,
    DragDropModule,
  ],
  exports: [CalendarComponent],
})
export class PageModule {}
