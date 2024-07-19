import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './main.view.html',
  styleUrl: './main.view.scss',
})
export class MainView {
  title = 'title';
}
