import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoWorkComponent } from './todo-work.component';

describe('TodoWorkComponent', () => {
  let component: TodoWorkComponent;
  let fixture: ComponentFixture<TodoWorkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TodoWorkComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TodoWorkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
