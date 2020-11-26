import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReadinessTestComponent } from './readiness-test.component';

describe('ReadinessTestComponent', () => {
  let component: ReadinessTestComponent;
  let fixture: ComponentFixture<ReadinessTestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReadinessTestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReadinessTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
