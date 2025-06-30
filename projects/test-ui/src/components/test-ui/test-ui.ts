import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'lib-test-ui',
  template: `
    <p>
      test-ui works!
    </p>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TestUi {}
