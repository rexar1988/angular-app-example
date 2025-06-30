import type { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import type { Post } from '@app/shared/interfaces/post.interface';
import { EnvironmentService } from '../../../../services/environment/environment.service';

@Injectable()
export class PostService {
  readonly #apiUrl = inject(EnvironmentService).apiUrl;
  readonly #httpClient = inject(HttpClient);

  getPosts(): Observable<Post[]> {
    return this.#httpClient.get<Post[]>(`${this.#apiUrl}/posts`);
  }

  getPost(postId: number): Observable<Post> {
    return this.#httpClient.get<Post>(`${this.#apiUrl}/posts/${postId}`);
  }
}
