import { Component, OnInit, Injectable, Inject } from '@angular/core';

import { APP_CONFIG, IAppConfig } from '.././app.config';
import { CameraService } from '.././camera.service';

@Component({
  selector: 'fotomat-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  exposure: object;
  presets: object;

  constructor(private cameraService: CameraService, @Inject(APP_CONFIG) private config: IAppConfig) { 
  }

  onShutterspeedChanged(event) {
    this.setShutterspeed(event);
  }

  setShutterspeed(value) {
    this.cameraService.setShutterspeed(value).then(this.init.apply(this));
  }

  onApertureChanged(event) {
    this.setAperture(event);
  }

  setAperture(value) {
    this.cameraService.setAperture(value).then(this.init.apply(this));
  }

  onIsoChanged(event) {
    this.setIso(event);
  }

  setIso(value) {
    this.cameraService.setIso(value).then(this.init.apply(this));
  }

  setPreset(preset) {
    this.cameraService.setPreset(preset).then(this.init.apply(this));
  }

  ngOnInit() {
    this.init();
  }

  private init() {
    this.cameraService.getExposure().then(exposure => {
      this.exposure = exposure;
    });

    this.cameraService.getPresets().then(data => {
      this.presets = data.presets;
    });
  }

}
