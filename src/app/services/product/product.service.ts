import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '@helix/environments/environment';
import type { Product } from '@helix/shared/interfaces';
import type { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  readonly #apiUrl = environment.apiUrl;
  readonly #httpClient = inject(HttpClient);

  getProduct(productId: number): Observable<Product> {
    return this.#httpClient.get<Product>(`${this.#apiUrl}/some-url/${productId}`);
  }
}
