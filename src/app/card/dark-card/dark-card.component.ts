import { Component, OnInit, OnDestroy } from '@angular/core';
import { Card } from '../card';
import { PlatformService } from 'src/app/services/platform/platform.service';
import { IObserver } from 'src/app/models/IObserver';

@Component({
  selector: 'app-dark-card',
  templateUrl: './dark-card.component.html',
  styleUrls: ['./dark-card.component.css']
})
export class DarkCardComponent extends Card implements OnInit, IObserver, OnDestroy {

  private platform: string;

  constructor(private platformService: PlatformService) {
    super();
    this.cardContent = 'This is the dark card component content';
    this.cardTitle = 'This is card dark theme content';
    this.name = 'DarkCardComponent';
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
