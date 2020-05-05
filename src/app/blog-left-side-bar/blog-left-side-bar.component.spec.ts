import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogLeftSideBarComponent } from './blog-left-side-bar.component';

describe('BlogLeftSideBarComponent', () => {
  let component: BlogLeftSideBarComponent;
  let fixture: ComponentFixture<BlogLeftSideBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlogLeftSideBarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlogLeftSideBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
