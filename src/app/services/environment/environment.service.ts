import { Injectable } from '@angular/core';
import { environment } from '@app/environments/environment';
import type { Environment } from '@app/shared/interfaces/core/environment.interface';

@Injectable({
  providedIn: 'root',
  useValue: environment,
})
export class EnvironmentService implements Environment {
  apiUrl = environment.apiUrl;

}
