import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import {
  NbAccordionModule,
  NbCheckboxModule,
  NbIconModule,
  NbMenuItemComponent,
  NbMenuModule,
  NbSidebarModule,
} from '@nebular/theme';
import { MenuSidebarComponent } from './menu-sidebar/menu-sidebar.component';
import { RouterModule } from '@angular/router';
import { PendingWorkComponent } from './menu-sidebar/pending-work/pending-work.component';
import { TodoWorkComponent } from './menu-sidebar/todo-work/todo-work.component';

@NgModule({
  declarations: [
    HeaderComponent,
    SidebarComponent,
    MenuSidebarComponent,
    PendingWorkComponent,
    TodoWorkComponent,
  ],
  imports: [
    CommonModule,
    NbSidebarModule,
    NbIconModule,
    NbAccordionModule,
    RouterModule,
    NbCheckboxModule,
  ],
  exports: [HeaderComponent, SidebarComponent, MenuSidebarComponent],
})
export class ComponentsModule {}
