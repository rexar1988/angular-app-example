import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '$domain/interfaces';
import { environment } from '$environments/environment';

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
