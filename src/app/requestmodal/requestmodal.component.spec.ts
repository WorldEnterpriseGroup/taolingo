import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestmodalComponent } from './requestmodal.component';

describe('RequestmodalComponent', () => {
  let component: RequestmodalComponent;
  let fixture: ComponentFixture<RequestmodalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RequestmodalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RequestmodalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
