import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'blog-uoc-project-front';
  localesList = [
    { code: 'en-US', label: 'English' },
    { code: 'es-ES', label: 'Español' },
  ];
}
