import { Component, OnInit, Injectable, Inject } from '@angular/core';

import { APP_CONFIG, IAppConfig } from '.././app.config';
import { CameraService } from '.././camera.service';

@Injectable()
@Component({
  selector: 'fotomat-startup',
  templateUrl: './startup.component.html',
  styleUrls: ['./startup.component.css']
})
export class StartupComponent implements OnInit {

  constructor(private cameraService: CameraService, @Inject(APP_CONFIG) private config: IAppConfig) { 
    console.log(config.apiEndpoint);
  }

  ngOnInit() {
    this.cameraService.disableLiveview();
  }

  ngOnDestroy() {
    console.log('ondestroy');
  }

}
