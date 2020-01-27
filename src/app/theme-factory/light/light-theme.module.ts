import { NgModule } from '@angular/core';
import { LightThemeFactoryComponent } from './light-theme.factory';
import { LightCardComponent } from 'src/app/card/light-card/light-card.component';
import { LightToolbarComponent } from 'src/app/toolbar/light-toolbar/light-toolbar.component';

@NgModule({
  imports: [],
  declarations: [
    LightThemeFactoryComponent,
    LightCardComponent,
    LightToolbarComponent
  ],
  entryComponents: []
})
export class LightThemeModule { }
