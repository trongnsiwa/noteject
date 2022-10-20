import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss'],
})
export class CalendarComponent implements OnInit {
  days: any[] = [
    { day: 'Monday', date: '1', month: 'January', year: '2021', works: [] },
    { day: 'Tuesday', date: '2', month: 'January', year: '2021', works: [] },
    { day: 'Wednesday', date: '3', month: 'January', year: '2021', works: [] },
    { day: 'Thursday', date: '4', month: 'January', year: '2021', works: [] },
    { day: 'Friday', date: '5', month: 'January', year: '2021', works: [] },
    { day: 'Saturday', date: '6', month: 'January', year: '2021', works: [] },
    { day: 'Sunday', date: '7', month: 'January', year: '2021', works: [] },
  ];

  constructor() {}

  ngOnInit(): void {}
}
