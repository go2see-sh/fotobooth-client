import { Component, OnInit, Injectable, Inject } from '@angular/core';

import { APP_CONFIG, IAppConfig } from '.././app.config';
import { CameraService } from '.././camera.service';

@Injectable()
@Component({
  selector: 'fotomat-liveview',
  templateUrl: './liveview.component.html',
  styleUrls: ['./liveview.component.css']
})
export class LiveviewComponent implements OnInit {

  previewUrl: string;
  smile: boolean;

  constructor(private cameraService: CameraService, @Inject(APP_CONFIG) private config: IAppConfig) { 
  }

  capture() {
    this.smile = true;
    this.cameraService.capture().then(() => {
      alert("captured");
      this.smile = false;
    });
  }

  ngOnInit() {
    this.smile = false;
    this.cameraService.enableLiveview().then(() => {
      this.previewUrl = this.cameraService.previewStreamUrl();
      console.log(this.previewUrl);
    });
  }

  ngOnDestroy() {
    this.cameraService.disableLiveview();
  }

}
