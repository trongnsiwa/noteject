import { Component, Input, OnInit } from '@angular/core';
import { CdkDragDrop } from '@angular/cdk/drag-drop';
import { SharedService } from '../../services/shared.service';

@Component({
  selector: 'app-day-block',
  templateUrl: './day-block.component.html',
  styleUrls: ['./day-block.component.scss'],
})
export class DayBlockComponent implements OnInit {
  @Input() day: any;
  @Input() dayId: any;

  constructor(private sharedService: SharedService) {}

  ngOnInit(): void {}

  drop(event: CdkDragDrop<string[]>) {
    this.sharedService.dropped(event);
  }
}
