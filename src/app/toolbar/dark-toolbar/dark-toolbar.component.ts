import { Component, OnInit } from '@angular/core';
import { Toolbar } from '../toolbar';

@Component({
  selector: 'app-dark-toolbar',
  templateUrl: './dark-toolbar.component.html',
  styleUrls: ['./dark-toolbar.component.css']
})
export class DarkToolbarComponent extends Toolbar {

  constructor() {
    super();
    this.title = 'Dark Theme Toolbar';
  }

}
