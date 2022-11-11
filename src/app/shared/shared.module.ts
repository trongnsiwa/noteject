import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NbEvaIconsModule } from '@nebular/eva-icons';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { HeaderComponent, SidebarComponent } from './layout';
import {
  NbAccordionModule,
  NbButtonModule,
  NbCheckboxModule,
  NbIconModule,
  NbLayoutModule,
  NbSidebarModule,
  NbUserModule,
} from '@nebular/theme';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [HeaderComponent, SidebarComponent],
  imports: [
    CommonModule,
    NbLayoutModule,
    RouterModule,
    NbSidebarModule,
    NbButtonModule,
    NbEvaIconsModule,
    NbIconModule,
    DragDropModule,
    NbUserModule,
  ],
  exports: [
    CommonModule,
    RouterModule,
    NbLayoutModule,
    NbSidebarModule,
    NbButtonModule,
    NbEvaIconsModule,
    NbIconModule,
    DragDropModule,
    HeaderComponent,
    SidebarComponent,
    NbCheckboxModule,
    NbAccordionModule,
    FormsModule,
    ReactiveFormsModule,
  ],
})
export class SharedModule {}
