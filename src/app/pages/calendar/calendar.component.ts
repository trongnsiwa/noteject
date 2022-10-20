import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss'],
})
export class CalendarComponent implements OnInit {
  days: any[] = [
    {
      day: 'Monday',
      date: '01',
      month: '01',
      year: '2021',
      works: [
        {
          title: 'Work 1 Work 1 Work 1 Work 1 Work 1 Work 1 Work 1 Work 1',
          isDone: false,
        },
        { title: 'Work 2', isDone: false },
        { title: 'Work 3', isDone: true },
      ],
    },
    { day: 'Tuesday', date: '02', month: '01', year: '2021', works: [] },
    { day: 'Wednesday', date: '03', month: '01', year: '2021', works: [] },
    { day: 'Thursday', date: '04', month: '01', year: '2021', works: [] },
    { day: 'Friday', date: '05', month: '01', year: '2021', works: [] },
    { day: 'Saturday', date: '06', month: '01', year: '2021', works: [] },
    { day: 'Sunday', date: '07', month: '01', year: '2021', works: [] },
  ];

  constructor() {}

  ngOnInit(): void {}
}
