import { Observable, of, Subscription } from 'rxjs';
import { CdkDragDrop } from '@angular/cdk/drag-drop';
import {
  Component,
  ElementRef,
  OnInit,
  Renderer2,
  SimpleChanges,
  ViewChild,
} from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import {
  SharedService,
  CalendarService,
  Label,
  LabelInput,
  Work,
} from 'src/app/core';
import { map } from 'rxjs/operators';
import { NbTagComponent } from '@nebular/theme';
import {
  InfiniteLabelList,
  InfiniteWorkList,
} from 'src/app/core/types/calendar';

@Component({
  selector: 'app-menu-sidebar',
  templateUrl: './menu-sidebar.component.html',
  styleUrls: ['./menu-sidebar.component.scss'],
})
export class MenuSidebarComponent implements OnInit {
  added: boolean = false;
  dayIds: string[] = ['day1', 'day2', 'day3', 'day4', 'day5', 'day6', 'day7'];
  workForm!: FormGroup;

  throttle = 0;
  distance = 2;

  pendingList: InfiniteWorkList = {
    works: [],
    placeholders: [],
    loading: false,
    pageToLoadNext: 1,
    totalPage: 1,
  };

  todayList: InfiniteWorkList = {
    works: [],
    placeholders: [],
    loading: false,
    pageToLoadNext: 1,
    totalPage: 1,
  };

  savedList: InfiniteWorkList = {
    works: [],
    placeholders: [],
    loading: false,
    pageToLoadNext: 1,
    totalPage: 1,
  };

  labelList: InfiniteLabelList = {
    labels: [],
    placeholders: [],
    loading: false,
    pageToLoadNext: 1,
    totalPage: 1,
  };

  pageSize = 10;

  haveAdded: boolean = false;
  openedLabel: boolean = false;

  labelInputs: LabelInput[] = [];

  @ViewChild('toggleIcon') toggleIcon!: ElementRef;
  @ViewChild('labelCard') labelCard!: ElementRef;

  constructor(
    private sharedService: SharedService,
    private calendarService: CalendarService,
    private renderer: Renderer2
  ) {
    this.renderer.listen('window', 'click', (e: Event) => {
      if (
        !this.toggleIcon?.nativeElement.contains(e.target) &&
        !this.labelCard?.nativeElement.contains(e.target)
      ) {
        this.openedLabel = false;
      }
    });
  }

  ngOnInit(): void {
    this.workForm = new FormGroup({
      title: new FormControl('', [
        Validators.required,
        Validators.minLength(4),
        Validators.maxLength(30),
      ]),
      description: new FormControl(''),
      searchedLabel: new FormControl(''),
    });

    this.getPendingWorks(1);
    this.getSavedWorks(1);
    this.getTodayWorks(1);
  }

  ngAfterViewInit() {
    this.workForm.get('searchedLabel')?.valueChanges.subscribe((value) => {
      this.getLabels(1);
      this.haveAddedLabel();
    });
  }

  getPendingWorks(pageNo: number) {
    if (pageNo > this.pendingList.totalPage) return;

    if (this.pendingList.loading) return;

    this.pendingList.loading = true;
    this.pendingList.placeholders = new Array(this.pageSize);
    // get pending works
    this.calendarService.getPendingWorks(pageNo, this.pageSize).subscribe({
      next: ({ data }: any) => {
        this.pendingList.placeholders = [];
        this.pendingList.works.push(...data.works);
        this.pendingList.loading = false;
        this.pendingList.totalPage = data.totalPage;
      },
      error: (error) => {
        this.pendingList.works = [];
      },
    });
  }

  getTodayWorks(pageNo: number) {
    if (pageNo > this.todayList.totalPage) return;

    if (this.todayList.loading) return;

    this.todayList.loading = true;
    this.todayList.placeholders = new Array(this.pageSize);
    // get today works
    this.calendarService.getTodayWorks(pageNo, this.pageSize).subscribe({
      next: ({ data }: any) => {
        this.todayList.placeholders = [];
        this.todayList.works.push(...data.works);
        this.todayList.loading = false;
        this.todayList.totalPage = data.totalPage;
      },
      error: (error) => {
        this.todayList.works = [];
      },
    });
  }

  getSavedWorks(pageNo: number) {
    if (pageNo > this.savedList.totalPage) return;

    if (this.savedList.loading) return;

    this.savedList.loading = true;
    this.savedList.placeholders = new Array(this.pageSize);

    // get saved works
    this.calendarService.getSavedWorks(pageNo, this.pageSize).subscribe({
      next: ({ data }: any) => {
        this.savedList.placeholders = [];
        this.savedList.works.push(...data.works);
        this.savedList.loading = false;
        this.savedList.totalPage = data.totalPage;
      },
      error: (error) => {
        this.savedList.works = [];
      },
    });
  }

  getLabels(pageNo: number) {
    if (this.labelList.totalPage !== 0 && pageNo > this.labelList.totalPage)
      return;

    if (this.labelList.loading) return;

    this.labelList.loading = true;
    this.labelList.placeholders = new Array(this.pageSize);
    // get labels
    this.calendarService
      .getLabels(pageNo, this.pageSize, this.searchedLabel?.value ?? '')
      .subscribe({
        next: ({ data }: any) => {
          this.labelList.placeholders = [];
          if (pageNo === 1) {
            this.labelList.labels = data.labels;
          } else {
            this.labelList.labels.push(...data.labels);
          }

          this.labelList.loading = false;
          this.labelList.totalPage = data.totalPage;
        },
        error: (error) => {
          this.labelList.labels = [];
        },
      });
  }

  get title() {
    return this.workForm.get('title');
  }

  get description() {
    return this.workForm.get('description');
  }

  get searchedLabel() {
    return this.workForm.get('searchedLabel');
  }

  haveAddedLabel() {
    this.haveAdded = false;

    if (this.searchedLabel?.value === '') return;

    if (this.labelList.labels.length === 0 && this.labelList.totalPage === 0) {
      this.haveAdded = true;
    } else {
      for (const label of this.labelList.labels) {
        if (this.searchedLabel?.value !== label.name) {
          this.haveAdded = true;
        }
      }
    }
  }

  addLabelToInputs() {
    if (this.searchedLabel?.value !== '' && this.haveAdded) {
      this.labelInputs.push({
        name: this.searchedLabel?.value,
        colorId: 1,
      });
      this.searchedLabel?.setValue('');
    }
  }

  onLabelRemove(labelToRemove: NbTagComponent): void {
    this.labelInputs = this.labelInputs.filter(
      (l) => l.name !== labelToRemove.text
    );
  }

  checkedChangeLabels(label: Label) {
    const index = this.labelInputs.findIndex((l) => l.name === label.name);

    if (index !== -1) {
      this.labelInputs.splice(index, 1);
    } else {
      this.labelInputs.push({
        name: label.name,
        colorId: label.color.id,
      });
    }
  }

  checkedHasLabel(label: Label) {
    return this.labelInputs.findIndex((l) => l.name === label.name) !== -1;
  }

  drop(event: CdkDragDrop<Work[]>) {
    this.sharedService.dropped(event);
  }

  toggleAdd() {
    this.added = !this.added;
    this.workForm.reset();
  }

  toggleLabel() {
    this.openedLabel = !this.openedLabel;
  }

  addWork() {
    if (this.workForm.valid) {
      this.calendarService
        .addWork(
          this.workForm.value.title,
          this.workForm.value.description,
          this.labelInputs
        )
        .subscribe({
          next: ({ data, successCode }: any) => {
            this.pendingList.works.push(data);
            this.sharedService.showToast(successCode, 'success');
            this.workForm.reset();
            this.labelInputs = [];
          },
          error: (error) => {
            this.sharedService.showToast(error, 'danger');
          },
        });
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
