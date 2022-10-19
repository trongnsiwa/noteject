import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-pending-work',
  templateUrl: './pending-work.component.html',
  styleUrls: ['./pending-work.component.scss'],
})
export class PendingWorkComponent implements OnInit {
  @Input() pendingWork: any;

  constructor() {}

  ngOnInit(): void {}
}
