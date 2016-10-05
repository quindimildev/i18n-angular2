import './polyfills.ts';

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import {enableProdMode, TRANSLATIONS, TRANSLATIONS_FORMAT, LOCALE_ID} from '@angular/core';
import { environment } from './environments/environment';
import { AppModule } from './app/';
import {TRANSLATION_EN} from "./resources/i18n/messages.en";
import {TRANSLATION_ES} from "./resources/i18n/messages.es";

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(
  AppModule,
  {providers: [
    {provide: TRANSLATIONS, useValue: TRANSLATION_ES},
    {provide: TRANSLATIONS_FORMAT, useValue:'xlf'},
    {provide: LOCALE_ID, useValue:'es'}
  ]});
