import { Component, HostListener, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { SharedService } from '../../../core/services/shared.service';

@Component({
  selector: 'app-pending-work',
  templateUrl: './pending-work.component.html',
  styleUrls: ['./pending-work.component.scss'],
})
export class PendingWorkComponent implements OnInit {
  @Input() pendingWork: any;
  edited: boolean = false;
  isFocusInsideComponent = false;
  isComponentClicked = false;
  workForm!: FormGroup;

  constructor(private sharedService: SharedService) {}

  ngOnInit(): void {
    this.workForm = new FormGroup({
      editedTitle: new FormControl(this.pendingWork.title, [
        Validators.required,
        Validators.minLength(4),
        Validators.maxLength(30),
      ]),
    });
  }

  get editedTitle() {
    return this.workForm.get('editedTitle');
  }

  @HostListener('click')
  clickInside() {
    this.isFocusInsideComponent = true;
    this.isComponentClicked = true;
  }

  @HostListener('document:click')
  clickout() {
    if (
      !this.isFocusInsideComponent &&
      this.isComponentClicked &&
      this.edited
    ) {
      this.editWork();

      this.isComponentClicked = false;
    }
    this.isFocusInsideComponent = false;
  }

  showInput() {
    this.edited = true;
  }

  closeInput() {
    this.edited = false;
    this.workForm.reset({
      editedTitle: this.pendingWork.title,
    });
  }

  onDragStart(event: DragEvent) {
    this.edited = false;
  }

  editWork() {
    if (this.workForm.valid) {
      this.sharedService.showToast('Edit work successfully', 'success');
      this.edited = false;
    } else {
      if (this.editedTitle?.touched) {
        if (this.editedTitle?.hasError('required')) {
          this.sharedService.showToast('Title is required', 'danger');
        }
        if (this.editedTitle?.hasError('minlength')) {
          this.sharedService.showToast(
            'Title must be at least 4 characters',
            'danger'
          );
        }
        if (this.editedTitle?.hasError('maxlength')) {
          this.sharedService.showToast(
            'Title must be at most 30 characters',
            'danger'
          );
        }
      }
    }
  }
}
