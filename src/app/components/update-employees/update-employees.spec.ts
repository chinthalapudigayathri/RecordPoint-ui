import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateEmployees } from './update-employees';

describe('UpdateEmployees', () => {
  let component: UpdateEmployees;
  let fixture: ComponentFixture<UpdateEmployees>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UpdateEmployees]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateEmployees);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
