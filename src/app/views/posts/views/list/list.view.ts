import { ChangeDetectionStrategy, Component, inject, type OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { postActions, postFeature } from '@app/views/posts/state/post';

@Component({
  selector: 'showcase-list',
  templateUrl: './list.view.html',
  styleUrl: './list.view.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ListView implements OnInit {
  readonly store = inject(Store);
  posts = this.store.selectSignal(postFeature.selectPosts);

  ngOnInit(): void {
    this.store.dispatch(postActions.postsGroup.loadPosts());
  }
}
