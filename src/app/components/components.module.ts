import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import {
  NbAccordionModule,
  NbIconModule,
  NbMenuItemComponent,
  NbMenuModule,
  NbSidebarModule,
} from '@nebular/theme';
import { MenuSidebarComponent } from './menu-sidebar/menu-sidebar.component';

@NgModule({
  declarations: [HeaderComponent, SidebarComponent, MenuSidebarComponent],
  imports: [CommonModule, NbSidebarModule, NbIconModule, NbAccordionModule],
  exports: [HeaderComponent, SidebarComponent, MenuSidebarComponent],
})
export class ComponentsModule {}
