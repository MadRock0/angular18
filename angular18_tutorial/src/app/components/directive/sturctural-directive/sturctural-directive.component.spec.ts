import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SturcturalDirectiveComponent } from './sturctural-directive.component';

describe('SturcturalDirectiveComponent', () => {
  let component: SturcturalDirectiveComponent;
  let fixture: ComponentFixture<SturcturalDirectiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SturcturalDirectiveComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SturcturalDirectiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
