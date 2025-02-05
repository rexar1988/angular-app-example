import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'lib-2ui-sdk',
  standalone: true,
  imports: [],
  template: `
    <p>ui-sdk works!</p>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UiSdkComponent {}
