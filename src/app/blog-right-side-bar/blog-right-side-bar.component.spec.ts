import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogRightSideBarComponent } from './blog-right-side-bar.component';

describe('BlogRightSideBarComponent', () => {
  let component: BlogRightSideBarComponent;
  let fixture: ComponentFixture<BlogRightSideBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlogRightSideBarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlogRightSideBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
