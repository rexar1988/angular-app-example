import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { TranslatePipe } from 'test-lib/i18n';

@Component({
  selector: 'lib-button',
  standalone: true,
  imports: [CommonModule, TranslatePipe],
  templateUrl: './button.component.html',
  styleUrl: './button.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ButtonComponent {
  readonly label = input('Click me');
}
