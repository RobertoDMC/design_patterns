import { NgModule } from '@angular/core';
import { DarkThemeFactoryComponent } from './dark-theme.factory';
import { DarkCardComponent } from 'src/app/card/dark-card/dark-card.component';
import { DarkToolbarComponent } from 'src/app/toolbar/dark-toolbar/dark-toolbar.component';

@NgModule({
  imports: [],
  declarations: [
    DarkThemeFactoryComponent,
    DarkCardComponent,
    DarkToolbarComponent
  ],
  entryComponents: []
})
export class DarkThemeModule { }
