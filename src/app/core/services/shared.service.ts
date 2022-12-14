import {
  CdkDragDrop,
  moveItemInArray,
  transferArrayItem,
} from '@angular/cdk/drag-drop';
import { Injectable } from '@angular/core';
import { NbToastrService } from '@nebular/theme';
import { AbstractControl, FormControl } from '@angular/forms';
import { Work } from '../models';

@Injectable({
  providedIn: 'root',
})
export class SharedService {
  constructor(private toastrService: NbToastrService) {}

  dropped(event: CdkDragDrop<Work[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    }
  }

  showToast(message: string, status: string) {
    this.toastrService.show(message, '', { status });
  }
}
