import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { NbIconModule, NbSidebarModule } from '@nebular/theme';

@NgModule({
  declarations: [HeaderComponent, SidebarComponent],
  imports: [CommonModule, NbSidebarModule, NbIconModule],
  exports: [HeaderComponent, SidebarComponent],
})
export class ComponentsModule {}
