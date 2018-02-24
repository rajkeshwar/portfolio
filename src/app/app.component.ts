import { Component } from '@angular/core';

@Component({
  selector: 'pfl-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'pfl';

  public routes = [
    { path: 'about', icon: 'mdi-social-person', theme: 'teal-text', label: 'About' },
    { path: 'experience', icon: 'mdi-action-trending-up', theme: 'cyan-text', label: 'Experience' },
    { path: 'projects', icon: 'mdi-av-web', theme: 'indigo-text', label: 'Projects' },
    { path: 'skills', icon: 'mdi-av-equalizer', theme: 'purple-text', label: 'Skills' },
    { path: 'awards', icon: 'mdi-action-grade', theme: 'red-text', label: 'Awards' },
    { path: 'education', icon: 'mdi-social-school', theme: 'orange-text', label: 'Education' },
    { path: 'contact', icon: 'mdi-content-mail', theme: 'brown-text', label: 'Contact' }
  ];

}
