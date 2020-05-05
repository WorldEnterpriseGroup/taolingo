import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EventLeftSideBarComponent } from './event-left-side-bar.component';

describe('EventLeftSideBarComponent', () => {
  let component: EventLeftSideBarComponent;
  let fixture: ComponentFixture<EventLeftSideBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EventLeftSideBarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventLeftSideBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
