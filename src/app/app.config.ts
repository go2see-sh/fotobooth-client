import { InjectionToken } from '@angular/core';

export interface IAppConfig {
  apiEndpoint: string;
};

export const FotomatConfig: IAppConfig = {
  apiEndpoint: 'http://localhost:1234'
};

export let APP_CONFIG = new InjectionToken<IAppConfig>('app.config');