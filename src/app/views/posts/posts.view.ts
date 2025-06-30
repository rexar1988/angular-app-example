import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'showcase-posts',
  imports: [RouterOutlet],
  templateUrl: './posts.view.html',
  styleUrl: './posts.view.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PostsView {}
