import { InjectionToken } from '@angular/core';

export interface IAppConfig {
  apiEndpoint: string;
};

export const FotomatConfig: IAppConfig = {
  apiEndpoint: 'http://192.168.178.32:8000'
};

export let APP_CONFIG = new InjectionToken<IAppConfig>('app.config');