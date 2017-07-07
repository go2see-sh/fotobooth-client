import { Injectable, Inject } from '@angular/core';
import { Http, Response } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/toPromise';

import { APP_CONFIG, IAppConfig } from './app.config';

@Injectable()
export class CameraService {

  constructor(private http: Http, @Inject(APP_CONFIG) private config: IAppConfig) { }

  capture(): Promise<any> {
    return this.http.get(this.config.apiEndpoint + '/capture').toPromise();
  }

  enableLiveview(): Promise<any> {
    return this.http.get(this.config.apiEndpoint + '/enableliveview').toPromise();
  }

  disableLiveview(): Promise<any> {
    return this.http.get(this.config.apiEndpoint + '/disableliveview').toPromise();
  }

  isLiveviewOn(): Promise<any> {
    return this.http.get(this.config.apiEndpoint + '/isliveviewon').toPromise();
  }

  previewStreamUrl(): string {
    return this.config.apiEndpoint + '/preview';
  }

  getPresets(): Promise<any> {
    return this.http.get(this.config.apiEndpoint + '/presets')
      .toPromise()
      .then(response => response.json())
  }

  setPreset(preset): Promise<any> {
    return this.http.post(this.config.apiEndpoint + '/preset', {
      presetname: preset
    }).toPromise();
  }

  getExposure(): Promise<any> {
    return this.http.get(this.config.apiEndpoint + '/exposure')
      .toPromise()
      .then(response => response.json());
  }

  setShutterspeed(shutterspeed: string): Promise<any> {
    return this.http.post(this.config.apiEndpoint + '/shutterspeed', {
      value: shutterspeed
    }).toPromise()
  }

  setAperture(aperture: string): Promise<any> {
    return this.http.post(this.config.apiEndpoint + '/aperture', {
      value: aperture
    }).toPromise()
  }

  setIso(iso: string): Promise<any> {
    return this.http.post(this.config.apiEndpoint + '/iso', {
      value: iso
    }).toPromise()
  }
}
