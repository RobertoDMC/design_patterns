import { ThemeFactory } from '../theme-factory';
import { Component } from '@angular/core';

@Component({
  selector: 'app-light-theme',
  templateUrl: './light-theme.component.html',
  styleUrls: ['./light-theme.component.css']
})
export class LightThemeFactoryComponent extends ThemeFactory {

  constructor() {
    super();
  }

  createComponents() {

  }
}
