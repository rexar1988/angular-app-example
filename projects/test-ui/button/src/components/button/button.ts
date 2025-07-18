import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { TranslatePipe } from 'test-ui/i18n';

@Component({
  selector: 'lib-button-2',
  imports: [CommonModule, TranslatePipe],
  templateUrl: './button.html',
  styleUrl: './button.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Button {
  readonly label = input('Click me');
}
