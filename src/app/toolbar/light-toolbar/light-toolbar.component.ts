import { Component } from '@angular/core';
import { Toolbar } from '../toolbar';

@Component({
  selector: 'app-light-toolbar',
  templateUrl: './light-toolbar.component.html',
  styleUrls: ['./light-toolbar.component.css']
})
export class LightToolbarComponent  extends Toolbar {

  constructor() {
    super();
    this.title = 'Light Theme Toolbar';
  }
}
