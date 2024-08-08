import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from '$components/header/header.component';

@Component({
  selector: 'hlx-main-layout',
  standalone: true,
  imports: [
    RouterOutlet,
    HeaderComponent,
  ],
  templateUrl: './main-layout.view.html',
  styleUrl: './main-layout.view.scss'
})
export class MainLayoutView {

}
