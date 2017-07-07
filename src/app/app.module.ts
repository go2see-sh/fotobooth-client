import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from "@angular/http";
import { RouterModule }   from '@angular/router';

import { APP_CONFIG, FotomatConfig } from './app.config';

import { AppComponent } from './app.component';
import { StartupComponent } from './startup/startup.component';
import { LiveviewComponent } from './liveview/liveview.component';
import { EditorComponent } from './editor/editor.component';
import { SummaryComponent } from './summary/summary.component';
import { AdminComponent } from './admin/admin.component';

import { CameraService } from './camera.service';

import { AppRoutingModule } from './app.routing';

@NgModule({
  declarations: [
    AppComponent,
    StartupComponent,
    LiveviewComponent,
    EditorComponent,
    SummaryComponent,
    AdminComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [
    CameraService,
    { provide: APP_CONFIG, useValue: FotomatConfig }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
