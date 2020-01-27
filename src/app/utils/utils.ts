import { ThemeFactory } from '../theme-factory/theme-factory';
import { Type } from '@angular/core';
import { LightThemeFactoryComponent } from '../theme-factory/light/light-theme.factory';
import { DarkThemeFactoryComponent } from '../theme-factory/dark/dark-theme.factory';

const ThemeTypeArray: Map<boolean, Type<ThemeFactory>> = new Map();
ThemeTypeArray.set(true, LightThemeFactoryComponent);
ThemeTypeArray.set(false, DarkThemeFactoryComponent);

function GetThemeType(type: boolean) {
  return ThemeTypeArray.get(type);
}

export const FactoryUtils = {
  GetThemeType
};
