import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditCouserComponent } from './edit-course.component';

describe('EditCouserComponent', () => {
  let component: EditCouserComponent;
  let fixture: ComponentFixture<EditCouserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditCouserComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditCouserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
