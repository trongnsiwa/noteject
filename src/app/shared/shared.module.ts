import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NbEvaIconsModule } from '@nebular/eva-icons';
import { DragDropModule } from '@angular/cdk/drag-drop';
import {
  NbAccordionModule,
  NbAlertModule,
  NbButtonModule,
  NbCardModule,
  NbCheckboxModule,
  NbIconModule,
  NbInputModule,
  NbLayoutModule,
  NbListModule,
  NbSelectModule,
  NbSidebarModule,
  NbTagModule,
  NbUserModule,
} from '@nebular/theme';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';

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
    NbSelectModule,
    NbListModule,
    NbCardModule,
    NbAlertModule,
    NbTagModule,
    InfiniteScrollModule,
  ],
})
export class SharedModule {}
