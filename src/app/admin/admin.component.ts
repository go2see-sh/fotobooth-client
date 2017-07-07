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

  setShutterspeed(value) {
    this.cameraService.setShutterspeed(value);
  }

  setAperture(value) {
    this.cameraService.setAperture(value);
  }

  setIso(value) {
    this.cameraService.setIso(value);
  }

  setPreset(preset) {
    this.cameraService.setPreset(preset);
  }

  ngOnInit() {
    this.cameraService.getExposure().then(exposure => {
      this.exposure = exposure;
    });

    this.cameraService.getPresets().then(data => {
      this.presets = data.presets;
    });
  }

}
