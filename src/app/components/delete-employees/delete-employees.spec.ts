import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteEmployees } from './delete-employees';

describe('DeleteEmployees', () => {
  let component: DeleteEmployees;
  let fixture: ComponentFixture<DeleteEmployees>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DeleteEmployees]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeleteEmployees);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
