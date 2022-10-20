import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-day-block',
  templateUrl: './day-block.component.html',
  styleUrls: ['./day-block.component.scss'],
})
export class DayBlockComponent implements OnInit {
  @Input() day: any;

  constructor() {}

  ngOnInit(): void {}
}
