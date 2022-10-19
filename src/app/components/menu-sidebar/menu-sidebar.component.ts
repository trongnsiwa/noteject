import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu-sidebar',
  templateUrl: './menu-sidebar.component.html',
  styleUrls: ['./menu-sidebar.component.scss'],
})
export class MenuSidebarComponent implements OnInit {
  pendingWorks: any[] = [
    { id: 1, title: 'Pending Work 1' },
    { id: 2, title: 'Pending Work 2' },
    { id: 3, title: 'Pending Work 3' },
    { id: 3, title: 'Pending Work 3' },
    { id: 3, title: 'Pending Work 3' },
    { id: 3, title: 'Pending Work 3' },
  ];
  todayWorks: any[] = [
    { id: 1, title: 'Today Work 1' },
    { id: 2, title: 'Today Work 2' },
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
  ];

  constructor() {}

  ngOnInit(): void {}
}
