import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkPlaceholderComponent } from './work-placeholder.component';

describe('WorkPlaceholderComponent', () => {
  let component: WorkPlaceholderComponent;
  let fixture: ComponentFixture<WorkPlaceholderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WorkPlaceholderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkPlaceholderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
