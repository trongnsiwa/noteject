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
import { WorkPlaceholderComponent } from './components/work-placeholder/work-placeholder.component';
import { LabelPlaceholderComponent } from './components/label-placeholder/label-placeholder.component';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';

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
    WorkPlaceholderComponent,
    LabelPlaceholderComponent,
  ],
  imports: [DashboardRoutingModule, SharedModule, NgxSkeletonLoaderModule],
})
export class DashboardModule {}
