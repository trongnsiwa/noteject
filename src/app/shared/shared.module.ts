import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NbEvaIconsModule } from '@nebular/eva-icons';
import { DragDropModule } from '@angular/cdk/drag-drop';
import {
  NbAccordionModule,
  NbAlertModule,
  NbButtonModule,
  NbCheckboxModule,
  NbIconModule,
  NbInputModule,
  NbLayoutModule,
  NbSidebarModule,
  NbUserModule,
} from '@nebular/theme';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [],
  imports: [CommonModule],
  exports: [
    CommonModule,
    RouterModule,
    NbLayoutModule,
    NbSidebarModule,
    NbButtonModule,
    NbEvaIconsModule,
    NbIconModule,
    DragDropModule,
    NbCheckboxModule,
    NbAccordionModule,
    FormsModule,
    ReactiveFormsModule,
    NbUserModule,
    NbInputModule,
    NbAlertModule,
  ],
})
export class SharedModule {}
