import { NgModule } from '@angular/core';
import { SharedModule } from '../shared';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { CalendarComponent, DashboardComponent } from './pages';
import {
  DayBlockComponent,
  PendingWorkComponent,
  TodoWorkComponent,
} from './components';
import {
  MenuSidebarComponent,
  SidebarComponent,
  HeaderComponent,
} from './layout';

@NgModule({
  declarations: [
    DashboardComponent,
    CalendarComponent,
    MenuSidebarComponent,
    DayBlockComponent,
    PendingWorkComponent,
    TodoWorkComponent,
    HeaderComponent,
    SidebarComponent,
  ],
  imports: [DashboardRoutingModule, SharedModule],
})
export class DashboardModule {}
