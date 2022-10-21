import { Component, OnInit } from '@angular/core';
import { nextSunday, previousSunday } from 'date-fns';
import {
  format,
  getWeekOfMonth,
  previousMonday,
  nextMonday,
  getDate,
  getDay,
  setDate,
} from 'date-fns';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss'],
})
export class CalendarComponent implements OnInit {
  options: {
    weekStartsOn?: 0 | 1 | 2 | 3 | 4 | 5 | 6 | undefined;
  } = {
    weekStartsOn: 1,
  };
  currentDate: Date = new Date();
  current = {
    week: getWeekOfMonth(new Date(), this.options),
    monthAndYear: format(new Date(), 'MMMM yyyy', this.options),
    dayOfWeek: format(new Date(), 'EEEE, dd/MM/yyyy', this.options),
  };
  week: any[] = [];

  constructor() {}

  ngOnInit(): void {
    this.generateWeek();
  }

  generateWeek() {
    for (let i = 1; i <= 7; i++) {
      let curr = new Date(this.currentDate);
      let first = getDate(curr) - getDay(curr) + i;
      let day = setDate(curr, first);
      let date = new Date(day);

      this.week.push({
        dayOfWeek: format(date, 'EEEE', this.options),
        date: format(date, 'dd/MM/yyyy', this.options),
        works: [],
        isCurrentDate:
          format(date, 'dd/MM/yyyy', this.options) ===
          format(new Date(), 'dd/MM/yyyy', this.options),
      });
    }
  }

  nextWeek() {
    const date = nextSunday(this.currentDate);

    this.currentDate = date;
    this.current = {
      ...this.current,
      week: getWeekOfMonth(date, this.options),
      monthAndYear: format(date, 'MMMM yyyy', this.options),
    };
    this.week = [];
    this.generateWeek();
  }

  prevWeek() {
    const date = previousSunday(this.currentDate);

    this.currentDate = date;
    this.current = {
      ...this.current,
      week: getWeekOfMonth(date, this.options),
      monthAndYear: format(date, 'MMMM yyyy', this.options),
    };
    this.week = [];
    this.generateWeek();
  }
}
