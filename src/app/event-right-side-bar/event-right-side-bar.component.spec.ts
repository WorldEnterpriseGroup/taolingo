import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EventRightSideBarComponent } from './event-right-side-bar.component';

describe('EventRightSideBarComponent', () => {
  let component: EventRightSideBarComponent;
  let fixture: ComponentFixture<EventRightSideBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EventRightSideBarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventRightSideBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
