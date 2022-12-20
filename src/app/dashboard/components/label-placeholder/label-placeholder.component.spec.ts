import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LabelPlaceholderComponent } from './label-placeholder.component';

describe('LabelPlaceholderComponent', () => {
  let component: LabelPlaceholderComponent;
  let fixture: ComponentFixture<LabelPlaceholderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LabelPlaceholderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LabelPlaceholderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
