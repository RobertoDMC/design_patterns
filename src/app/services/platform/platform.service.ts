import { Injectable } from '@angular/core';
import { IObserver } from 'src/app/models/IObserver';

@Injectable({
  providedIn: 'root'
})
export class PlatformService {
  private componentToNotify: Array<IObserver>;
  private platform: string;

  constructor() {
    this.componentToNotify = [];
  }

  public attach(observer: IObserver) {
    this.componentToNotify.push(observer);
  }

  public remove(observer: IObserver) {
    this.componentToNotify = this.componentToNotify.filter((obs) => obs.name !== observer.name);
  }

  public updatePlatform(platform: string) {
    this.platform = platform;
    this.notify();
  }

  private notify() {
    this.componentToNotify.forEach((obs) => obs.update(this.platform));
  }
}
