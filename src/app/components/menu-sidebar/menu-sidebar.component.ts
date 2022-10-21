import { CdkDragDrop } from '@angular/cdk/drag-drop';
import { Component, OnInit } from '@angular/core';
import { SharedService } from '../../services/shared.service';

@Component({
  selector: 'app-menu-sidebar',
  templateUrl: './menu-sidebar.component.html',
  styleUrls: ['./menu-sidebar.component.scss'],
})
export class MenuSidebarComponent implements OnInit {
  dayIds: string[] = ['day1', 'day2', 'day3', 'day4', 'day5', 'day6', 'day7'];

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

  drop(event: CdkDragDrop<string[]>) {
    this.sharedService.dropped(event);
  }

  ngOnInit(): void {}
}
