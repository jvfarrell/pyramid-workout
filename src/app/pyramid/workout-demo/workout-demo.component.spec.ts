import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkoutDemoComponent } from './workout-demo.component';

describe('WorkoutDemoComponent', () => {
  let component: WorkoutDemoComponent;
  let fixture: ComponentFixture<WorkoutDemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WorkoutDemoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkoutDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
