import { Injectable, Inject } from '@angular/core';
import { Http, Response } from '@angular/http';

import { Observable } from 'rxjs/Observable';

import { APP_CONFIG, IAppConfig } from './app.config';

@Injectable()
export class CameraService {

  constructor(private http: Http, @Inject(APP_CONFIG) private config: IAppConfig) { }

  capture(): Observable<any> {
    return this.http.get(this.config.apiEndpoint + '/capture');
  }

  enableLiveview(): Observable<any> {
    return this.http.get(this.config.apiEndpoint + '/enableliveview');
  }

  disableLiveview(): Observable<any> {
    return this.http.get(this.config.apiEndpoint + '/disableliveview');
  }

  isLiveviewOn(): Observable<any> {
    return this.http.get(this.config.apiEndpoint + '/isliveviewon');
  }

  previewStreamUrl(): string {
    return this.config.apiEndpoint + '/preview';
  }
}
