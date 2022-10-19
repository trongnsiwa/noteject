import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo-work',
  templateUrl: './todo-work.component.html',
  styleUrls: ['./todo-work.component.scss'],
})
export class TodoWorkComponent implements OnInit {
  @Input() todoWork: any;

  constructor() {}

  ngOnInit(): void {}
}
