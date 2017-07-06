import { Component, OnInit, Injectable, Inject } from '@angular/core';

import { APP_CONFIG, IAppConfig } from '.././app.config';
import { CameraService } from '.././camera.service';

@Injectable()
@Component({
  selector: 'fotomat-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.css']
})
export class SummaryComponent implements OnInit {

  constructor(private cameraService: CameraService, @Inject(APP_CONFIG) private config: IAppConfig) { 
  }

  ngOnInit() {
    this.cameraService.disableLiveview();
  }

}
