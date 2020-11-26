import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyProjectDashboardComponent } from './my-project-dashboard.component';

describe('MyProjectDashboardComponent', () => {
  let component: MyProjectDashboardComponent;
  let fixture: ComponentFixture<MyProjectDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyProjectDashboardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MyProjectDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
