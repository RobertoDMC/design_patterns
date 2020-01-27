import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { LightThemeModule } from './theme-factory/light/light-theme.module';
import { DarkThemeModule } from './theme-factory/dark/dark-theme.module';
import { LightThemeFactoryComponent } from './theme-factory/light/light-theme.factory';
import { DarkThemeFactoryComponent } from './theme-factory/dark/dark-theme.factory';
import { PlatformService } from './services/platform/platform.service';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    LightThemeModule,
    DarkThemeModule,
    FormsModule
  ],
  entryComponents: [
    LightThemeFactoryComponent,
    DarkThemeFactoryComponent
  ],
  providers: [
    PlatformService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
