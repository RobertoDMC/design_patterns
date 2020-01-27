export interface IObserver {
  name: string;
  update(platform: string): void;
}
