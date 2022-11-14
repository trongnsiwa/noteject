import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../shared';
import { CalendarComponent } from './pages/calendar/calendar.component';
import { DashboardComponent } from './pages/dashboard.component';

const routes: Routes = [
  {
    path: 'dashboard',
    component: DashboardComponent,
    children: [{ path: 'calendar', component: CalendarComponent }],
    canActivate: [AuthGuard],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashboardRoutingModule {}
