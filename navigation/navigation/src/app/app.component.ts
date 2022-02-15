import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'app-nav-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  ngVersion = VERSION;
  title = 'navigation';
}
