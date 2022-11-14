import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CalendarComponent } from './dashboard/pages/calendar/calendar.component';
import { DashboardComponent } from './dashboard/pages/dashboard.component';
import { AuthGuard } from './shared';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
  {
    path: 'dashboard',
    redirectTo: 'dashboard/calendar',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
