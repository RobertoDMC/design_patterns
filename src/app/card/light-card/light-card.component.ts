import { Component, OnInit, OnDestroy } from '@angular/core';
import { Card } from '../card';
import { PlatformService } from 'src/app/services/platform/platform.service';
import { IObserver } from 'src/app/models/IObserver';

@Component({
  selector: 'app-light-card',
  templateUrl: './light-card.component.html',
  styleUrls: ['./light-card.component.css']
})
export class LightCardComponent extends Card implements OnInit, IObserver, OnDestroy  {

  private platform: string;

  constructor(private platformService: PlatformService) {
    super();
    this.cardContent = 'This is the light card component content';
    this.cardTitle = 'This is card light theme content';
    this.name = 'LightCardComponent';
  }

  ngOnInit() {
    this.platformService.attach(this);
  }

  ngOnDestroy() {
    this.platformService.remove(this);
  }

  update(platform: string) {
    this.platform = platform;
  }
}
