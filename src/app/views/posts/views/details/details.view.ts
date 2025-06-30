import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'showcase-details',
  templateUrl: './details.view.html',
  styleUrl: './details.view.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DetailsView {

}
