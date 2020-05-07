import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormtryComponent } from './formtry.component';

describe('FormtryComponent', () => {
  let component: FormtryComponent;
  let fixture: ComponentFixture<FormtryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormtryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormtryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
