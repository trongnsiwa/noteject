import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PendingWorkComponent } from './pending-work.component';

describe('PendingWorkComponent', () => {
  let component: PendingWorkComponent;
  let fixture: ComponentFixture<PendingWorkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PendingWorkComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PendingWorkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
