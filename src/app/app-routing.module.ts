import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CalendarComponent } from './dashboard/pages/calendar/calendar.component';
import { DashboardComponent } from './dashboard/pages/dashboard.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/calendar',
    pathMatch: 'full',
  },
  {
    path: 'auth',
    redirectTo: 'auth/login',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
