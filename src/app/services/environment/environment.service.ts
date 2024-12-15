import { Injectable } from '@angular/core';
import type { Environment } from '@app/interfaces/core/environment.interface';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root',
  useValue: environment,
})
export class EnvironmentService implements Environment {
  apiUrl = environment.apiUrl;
}
