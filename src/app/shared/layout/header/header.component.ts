import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {}

  getRouteName(): string {
    switch (this.router.url) {
      case '/calendar':
        return 'Calendar';
      case '/board':
        return 'Board';
      default:
        return 'Note';
    }
  }
}
