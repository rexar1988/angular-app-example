import type { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import type { Product } from '@app/interfaces/product/product.interface';
import { EnvironmentService } from '@app/services/environment/environment.service';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  readonly #apiUrl = inject(EnvironmentService).apiUrl;
  readonly #httpClient = inject(HttpClient);

  getProduct(productId: number): Observable<Product> {
    return this.#httpClient.get<Product>(`${this.#apiUrl}/some-url/${productId}`);
  }
}
