import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  showMenu: Boolean;
  darkModeActive: Boolean;
  date: number;

  constructor() {
    this.date = Date.now();
  }
  modeToggleSwitch() {
    this.darkModeActive = !this.darkModeActive;
    console.log('hello');
   }

  toggleMenu() {
    this.showMenu = !this.showMenu;
   }
}
