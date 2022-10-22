import { CdkDragDrop } from '@angular/cdk/drag-drop';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { SharedService } from '../../services/shared.service';

@Component({
  selector: 'app-menu-sidebar',
  templateUrl: './menu-sidebar.component.html',
  styleUrls: ['./menu-sidebar.component.scss'],
})
export class MenuSidebarComponent implements OnInit {
  added: boolean = false;
  dayIds: string[] = ['day1', 'day2', 'day3', 'day4', 'day5', 'day6', 'day7'];
  workForm!: FormGroup;

  pendingWorks: any[] = [
    { id: 1, title: 'Pending Work 1 Pending Work 1 Pending Work 1' },
    { id: 2, title: 'Pending Work 2' },
    { id: 3, title: 'Pending Work 3' },
    { id: 3, title: 'Pending Work 3' },
    { id: 3, title: 'Pending Work 3' },
    { id: 3, title: 'Pending Work 3' },
    { id: 3, title: 'Pending Work 3' },
    { id: 3, title: 'Pending Work 3' },
    { id: 3, title: 'Pending Work 3' },
    { id: 3, title: 'Pending Work 3' },
    { id: 3, title: 'Pending Work 3' },
    { id: 3, title: 'Pending Work 1' },
    { id: 3, title: 'Pending Work 1' },
    { id: 3, title: 'Pending Work 1' },
    { id: 3, title: 'Pending Work 1' },
    { id: 3, title: 'Pending Work 1' },
    { id: 3, title: 'Pending Work 1' },
    { id: 3, title: 'Pending Work 1' },
    { id: 3, title: 'Pending Work 1' },
  ];
  todayWorks: any[] = [
    { id: 1, title: 'Today Work 1 Today Work 1 Today Work 1 Today Work 1' },
    { id: 2, title: 'Today Work 2' },
    { id: 3, title: 'Today Work 3' },
    { id: 3, title: 'Today Work 3' },
    { id: 3, title: 'Today Work 3' },
    { id: 3, title: 'Today Work 3' },
    { id: 3, title: 'Today Work 3' },
    { id: 3, title: 'Today Work 3' },
    { id: 3, title: 'Today Work 3' },
    { id: 3, title: 'Today Work 3' },
    { id: 3, title: 'Today Work 3' },
    { id: 3, title: 'Today Work 3' },
  ];
  savedWorks: any[] = [
    { id: 1, title: 'Saved Work 1' },
    { id: 2, title: 'Saved Work 2' },
    { id: 3, title: 'Saved Work 3' },
    { id: 3, title: 'Saved Work 3' },
    { id: 3, title: 'Saved Work 3' },
    { id: 3, title: 'Saved Work 3' },
    { id: 3, title: 'Saved Work 3' },
    { id: 3, title: 'Saved Work 3' },
    { id: 3, title: 'Saved Work 3' },
    { id: 3, title: 'Saved Work 3' },
    { id: 3, title: 'Saved Work 3' },
  ];

  constructor(private sharedService: SharedService) {}

  ngOnInit(): void {
    this.workForm = new FormGroup({
      title: new FormControl('', [
        Validators.required,
        Validators.minLength(4),
        Validators.maxLength(30),
      ]),
    });
  }

  get title() {
    return this.workForm.get('title');
  }

  drop(event: CdkDragDrop<string[]>) {
    this.sharedService.dropped(event);
  }

  toggleAdd() {
    this.added = !this.added;
    this.workForm.reset();
  }

  addWork() {
    if (this.workForm.valid) {
      this.sharedService.showToast('Add work successfully', 'success');
    } else {
      if (this.title?.touched) {
        if (this.title?.hasError('required')) {
          this.sharedService.showToast('Title is required', 'danger');
        }
        if (this.title?.hasError('minlength')) {
          this.sharedService.showToast(
            'Title must be at least 4 characters',
            'danger'
          );
        }
        if (this.title?.hasError('maxlength')) {
          this.sharedService.showToast(
            'Title must be at most 30 characters',
            'danger'
          );
        }
      }
    }
  }
}
