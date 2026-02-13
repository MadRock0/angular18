import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeyeeListComponent } from './employeeyee-list.component';

describe('EmployeeyeeListComponent', () => {
  let component: EmployeeyeeListComponent;
  let fixture: ComponentFixture<EmployeeyeeListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EmployeeyeeListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmployeeyeeListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
