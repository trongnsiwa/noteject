import { NgModule } from '@angular/core';
import { SharedModule } from '../shared';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { CalendarComponent, DashboardComponent } from './pages';
import {
  MenuSidebarComponent,
  DayBlockComponent,
  PendingWorkComponent,
  TodoWorkComponent,
} from './components';

@NgModule({
  declarations: [
    DashboardComponent,
    CalendarComponent,
    MenuSidebarComponent,
    DayBlockComponent,
    PendingWorkComponent,
    TodoWorkComponent,
  ],
  imports: [DashboardRoutingModule, SharedModule],
})
export class DashboardModule {}
