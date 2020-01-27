import { ThemeFactory } from '../theme-factory';
import { Component } from '@angular/core';

@Component({
  selector: 'app-dark-theme',
  templateUrl: './dark-theme.component.html',
  styleUrls: ['./dark-theme.component.css']
})
export class DarkThemeFactoryComponent extends ThemeFactory {

  constructor() {
    super();
  }

  createComponents() {

  }
}
