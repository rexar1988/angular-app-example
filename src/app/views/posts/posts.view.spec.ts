import { type ComponentFixture, TestBed } from '@angular/core/testing';

import { PostsView } from './posts.view';

describe('PostsView', () => {
  let component: PostsView;
  let fixture: ComponentFixture<PostsView>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PostsView],
    })
      .compileComponents();

    fixture = TestBed.createComponent(PostsView);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
