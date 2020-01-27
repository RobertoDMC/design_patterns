import { IObserver } from '../models/IObserver';

export abstract class Card implements IObserver {
  protected cardTitle: string;
  protected cardContent: string;
  public name: string;

  abstract update(platform: string);
}
