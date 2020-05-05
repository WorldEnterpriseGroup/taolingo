import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IndexFiveComponent } from './index-five.component';

describe('IndexFiveComponent', () => {
  let component: IndexFiveComponent;
  let fixture: ComponentFixture<IndexFiveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IndexFiveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IndexFiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
