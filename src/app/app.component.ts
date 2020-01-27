import { Component, ViewChild, ViewContainerRef, ComponentFactoryResolver, OnInit } from '@angular/core';
import { FactoryUtils } from './utils/utils';
import { ThemeFactory } from './theme-factory/theme-factory';
import { PlatformService } from './services/platform/platform.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  @ViewChild('host', { read: ViewContainerRef }) host: ViewContainerRef;
  theme: boolean;
  activeTheme: string;
  activePlatform: string;

  constructor(
    private compFactRes: ComponentFactoryResolver,
    private platformService: PlatformService
  ) {
    this.theme = false;
    this.activeTheme = this.theme ? 'light' : 'dark';
  }

  ngOnInit() {
    this.injectComponents();
  }

  changeTheme() {
    this.theme = !this.theme;
    this.activeTheme = this.theme ? 'light' : 'dark';
    this.injectComponents();
  }

  injectComponents() {
    const componentFactory = this.compFactRes.resolveComponentFactory(FactoryUtils.GetThemeType(this.theme));
    const viewContainerRef = this.host;
    viewContainerRef.clear();

    viewContainerRef.createComponent<ThemeFactory>(componentFactory);
  }

  radioChange(platform: string) {
    this.activePlatform = platform;
    this.platformService.updatePlatform(platform);
  }
}
